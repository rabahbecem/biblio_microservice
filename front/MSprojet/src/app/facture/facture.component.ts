import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { ClientServiceService } from '../client-service.service';
import { Facture } from '../facture';
import { FactureService } from '../facture.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  myform! : FormGroup;
  public facture : Facture;
  public Factures! : Facture[];
  public clients!:Customer[];
  public client!:Customer;
  constructor(private route : ActivatedRoute,private router :Router,private FactureService : FactureService
    ,private clientService: ClientServiceService){
    this.facture = new Facture();
  }
  fetchData(){
      this.FactureService.findAll().subscribe(data =>{
        this.Factures = data;
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
   
    this.FactureService.save(this.facture).subscribe(()=>{this.fetchData();});
    form.resetForm();

  }
  Supprimer(id : string){
    this.FactureService.delate(id).subscribe(
      data => {
        console.log(data);
        this.fetchData();
      }
    )}
}
