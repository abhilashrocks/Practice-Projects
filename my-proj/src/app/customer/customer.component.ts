import { Directive, Component, Input } from '@angular/core'
import { CustomerService } from "./customer.service";
@Component({
    selector:'my-customer',
    templateUrl:'./customer.component.html',
    providers:[CustomerService]
})

export class CustomerComponent{
    customer:string
    constructor(private _customerService:CustomerService){
      this.customer  = this._customerService.getCustomers();
    }
 
}