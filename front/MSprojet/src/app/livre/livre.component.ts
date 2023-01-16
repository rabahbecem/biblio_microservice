import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { LivreService } from '../livre.service';

import { Livre } from '../livre';
import { Customer } from '../customer';
import { ClientServiceService } from '../client-service.service';
@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {

  myform! : FormGroup;
  public livre! : Livre;
  public livres! : Livre[];
  public clients!:Customer[];
  public client!:Customer;
  constructor(private route : ActivatedRoute,private router :Router,private livreService : LivreService
    ,private clientService: ClientServiceService){
    this.livre = new Livre();
  }
  fetchData(){
    this.livreService.findAll().subscribe(data =>{
      this.livres = data;
   });
   this.clientService.findAll().subscribe(data1 =>{
    this.clients = data1;
   });
  }
  ngOnInit()  {
    this.fetchData();
    
  }
  title = 'MSprojet';
 
  Ajouter(form: NgForm){
    this.livreService.save(this.livre).subscribe(()=>{this.fetchData();});
    form.resetForm();

  }
  Supprimer(id : string){
    this.livreService.delate(id).subscribe(
      data => {
        console.log(data);
        this.fetchData();
      }
    )}
 
}