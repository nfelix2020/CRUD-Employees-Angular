import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public employees: Employee[]=[

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

  onAdd(employee: Employee){
    this.employees.push(employee); //On ajoute un nveau employé sur la liste des autres employés
  }


  onGetEmployee(id: Number){
    return this.employees.find(x=>x.id===id);  //Chercher l'employee dont l'ID est le meme que l'Id envoyé comme paramètre
  }


  onDelete(id?: Number){
    //Find the employee First
    let employee= this.employees.find(x => x.id ===id);
    //then find the index of employee

    let index= this.employees.indexOf(employee!, 0); //! : variable not nullable
    this.employees.splice(index, 1);

  }

}
