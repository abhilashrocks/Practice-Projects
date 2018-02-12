import { Component, Directive } from '@angular/core'
@Component({
    selector:'my-customers',
    templateUrl:'./customers.component.html'
})
@Directive({
    selector:'[my-customer]'
  })
export class CustomersComponent{
    customer:string;
}