import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'



@Injectable({

    providedIn:'root'
})


export class CustomerService{


    constructor(private httpData:HttpClient){}

  

    getAllCustomer(){

        return this.httpData.get("http://localhost:8855/bookstore/fetchAllCustomer");
    }

}