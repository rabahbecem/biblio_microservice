import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { ClientServiceService } from '../client-service.service';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  myform! : FormGroup;
  public client : Customer;
  public clients! : Customer[];
  constructor(private route : ActivatedRoute,private router :Router,private ClientService : ClientServiceService){
    this.client = new Customer();
  }
  fetchData(){
    this.ClientService.findAll().subscribe(data =>{
      this.clients = data;
   });
  }
  ngOnInit()  {
    this.fetchData();
    
  }
  title = 'MSprojet';
 
  Ajouter(form: NgForm){
    this.ClientService.save(this.client).subscribe(()=>{this.fetchData();});
    form.resetForm();

  }
  Supprimer(id : string){
    this.ClientService.delate(id).subscribe(
      data => {
        console.log(data);
        this.fetchData();
      }
    )}
 
}
