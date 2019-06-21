import { Component, OnInit } from '@angular/core';
import { CustomerService } from './app.customerService'



@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    

    constructor( private customerService:CustomerService){}


    allCustomers:any[];

    customer:any={};

    ngOnInit()

    {
         this.customerService.getAllCustomer().subscribe((data:any)=>this.allCustomers=data);
          this.customerService.getAllCustomer().subscribe((data:any)=>console.log(data));
    }




    addCustomer():any{
        alert(this.customer.customerId+" "+this.customer.customerFullName);
    }


    editCustomer(){
        
    }


    deleteCustomer(){
        
    }
 }