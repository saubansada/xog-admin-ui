import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/base.component';

@Component({
  selector: 'app-delivery-timings',
  templateUrl: './delivery-timings.component.html',
  styleUrls: ['./delivery-timings.component.scss']
})
export class DeliveryTimingsComponent extends BaseComponent implements OnInit {

  isActive: boolean = false;
  selectedDay: string;

  days: any = [
    { id: 0, name: 'Saturday' },
    { id: 1, name: 'Sunday' },
    { id: 2, name: 'Monday' },
    { id: 3, name: 'Tuesday' },
    { id: 4, name: 'Wednesday' },
    { id: 5, name: 'Thursdady' },
    { id: 6, name: 'Friday' },
  ]

  timeForm: FormGroup = this.fb.group({
    fromTime: [],
    toTime: []
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => {
      this.selectedDay = <string>res.get('day')
    })
  }

}
