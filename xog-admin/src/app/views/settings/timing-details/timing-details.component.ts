import { Component, forwardRef, Inject, Injector, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { ResponseObject } from 'src/app/models/common';
import { DeliveryTiming, DeliveryTimingFilter, WeekDayStatus } from 'src/app/models/delivery-timings';
import { DeliveryTimingsService } from 'src/app/services/delivery-timings-service';
import { QuantityMeasureService } from 'src/app/services/quantity-measure-service';
import { BaseComponent } from 'src/app/shared/base.component';
import { DeliveryTimingsComponent } from '../delivery-timings/delivery-timings.component';

@Component({
  selector: 'app-timing-details',
  templateUrl: './timing-details.component.html',
  styleUrls: ['./timing-details.component.scss']
})
export class TimingDetailsComponent extends BaseComponent implements OnInit {

  constructor(protected injector: Injector, private services: DeliveryTimingsService, @Inject(forwardRef(() => DeliveryTimingsComponent)) public parent: DeliveryTimingsComponent) {
    super(injector);
  }

  isActive: boolean = true;
  timingList: any[];

  get selectedDay(): AbstractControl | null {
    return this.timeForm.get('dayId');
  };

  timeForm: FormGroup = this.fb.group({
    dayId: [''],
    isActive: [true],
    fromTime: ['', [Validators.required]],
    toTime: ['', [Validators.required]]
  });


  ngOnInit(): void {
    this.route.paramMap.subscribe(res => {

      let filter: DeliveryTimingFilter = new DeliveryTimingFilter();
      let dayName = res.get('day');
      let index = this.parent.days.findIndex((i: any) => i.name.toLowerCase() == dayName);
      let dayInfo: any;
      if (index > -1) {
        dayInfo = this.parent.days[index];
        this.selectedDay?.setValue(dayInfo.id);
        this.isActive = dayInfo.isActive;
        filter.Ids = [dayInfo.id];
      }
      console.log(this.selectedDay?.value)
      console.log("data");
      this.services.getDeliveryTimingsList(filter).subscribe((res: ResponseObject<any[]>) => {
        this.timingList = res.Data ?? [];
        console.log(res.Data);
      })
    });

  }

  addTiming() {
    let fromTime = this.timeForm.get("fromTime")?.value ?? "";
    let toTime = this.timeForm.get("toTime")?.value ?? "";

    let fromHours = fromTime.split(":")[0];
    let fromMinutes = fromTime.split(":")?.length > 0 ? fromTime.split(":")[1] : ""
    let toHours = toTime.split(":")[0];
    let toMinutes = toTime.split(":")?.length > 0 ? fromTime.split(":")[1] : ""

    let deliveryTimings: DeliveryTiming = {
      Id: 0,
      DayId: this.selectedDay?.value,
      FromHours: fromHours,
      FromMinutes: fromMinutes,
      ToHours: toHours,
      ToMinutes: toMinutes,
      IsActive: this.timeForm.get("isActive")?.value ?? false
    }

    var formData: WeekDayStatus = {
      DayId: this.selectedDay?.value,
      DayName: "",
      IsDayActive: this.isActive,
      DeliveryTimings: deliveryTimings
    }
    this.services.addDeliveryTimingsInfo(formData).subscribe((res: ResponseObject<any>) => {
      console.log('successfully added');
    });
  }

  tConvert(_hours: string, _minutes: string) {
    // Check correct time format and split into components
    _hours = parseInt(_hours) < 10 ? "0" + _hours : _hours;
    _minutes = parseInt(_minutes) < 10 ? "0" + _minutes : _minutes;

    let time: any = (_hours + ":" + _minutes).toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || _hours + ":" + _minutes;

    if (time.length > 1) { // If time format correct
      time = time.slice(1);  // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(':').replace(":::", ":").replace(":::", " "); // return adjusted time or original string
  }
}
