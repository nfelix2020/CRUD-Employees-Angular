import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id?: number;
  header?: string;

 //Creer une variable employee vide, pour faire des conditions
   public emp?: Employee ={
    id:0,
    name:'',
    email:'',
    phone:''
  };

  constructor(  private route: ActivatedRoute , private EmployeeService : EmployeeService , private router: Router) { }

  ngOnInit(): void {
    this.id= Number(this.route.snapshot.paramMap.get('id'));  //verifier l'id
    this.header=this.id===0? 'Ajouter un employé': 'Modifier Employé';  //Si l'id =0 dans l'URL , on ajouter un nouvel employé, dans le cas contraire, on modifie l'employé existant

    if(this.id !=0){  //Si on est en mode Edit, et non en mode Add
      this.emp=this.EmployeeService.onGetEmployee(this.id);
    }
  }


  onSubmit (form: NgForm){
//  console.log(form.value);
    let emp: Employee ={
      id: form.value.id,
      name: form.value.nom,
      email: form.value.email,
      phone: form.value.phone,
    }

    this.EmployeeService.onAdd(emp); //On appelle la methode dans le service et on ajouter l'employé
    this.router.navigateByUrl(''); //Redirection au home page après ajout d'un employé
  }


}
