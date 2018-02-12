import { Component, Directive } from '@angular/core';
import {CustomerComponent} from './customer/customer.component'
@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html',
})
@Directive({
  selector:'[my-customers]'
})
export class AppComponent  {
 
}
