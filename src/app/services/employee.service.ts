import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[]=[

    {
      id:1,
      name:"Emp one",
      email:"empone@gmail.com",
      phone:"123456789",
    },
    {
      id:2,
      name:"Emp two",
      email:"empone@gmail.com",
      phone:"123456789",
    },

    {
      id:3,
      name:"Emp three",
      email:"empone@gmail.com",
      phone:"123456789"
    }

  ];

  constructor() { }


  //functions to return the list of employees to the component
  onGet(){

    return this.employees;
  }
}
