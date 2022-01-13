import { Component, Injector, OnInit } from '@angular/core';
import { QuantityMeasureService } from 'src/app/services/quantity-measure-service';
import { BaseComponent } from 'src/app/shared/base.component';

@Component({
  selector: 'app-delivery-charges',
  templateUrl: './delivery-charges.component.html',
  styleUrls: ['./delivery-charges.component.scss']
})
export class DeliveryChargesComponent extends BaseComponent implements OnInit {

  constructor(protected injector: Injector) {
    super(injector);
  }
  
  ngOnInit(): void {
  }

}
