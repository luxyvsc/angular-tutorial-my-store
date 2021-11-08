import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Product } from '../products';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent{

  @Input() firmino!: Product | undefined;
  @Output() notify = new EventEmitter();

}
