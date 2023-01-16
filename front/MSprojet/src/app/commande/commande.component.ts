import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientServiceService } from '../client-service.service';
import { Commande } from '../commande';
import { CommandeService } from '../commande.service';
import { Customer } from '../customer';
import { Livre } from '../livre';
import { LivreService } from '../livre.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  public commande! : Commande;
  public commandes! : Commande[];
  public clients!:Customer[];
  public client!:Customer;
  public livres!:Livre[];
  public ti!:string;
  public qe!:Number;
  constructor(private route : ActivatedRoute,private router :Router,private commandeService : CommandeService
    ,private clientService: ClientServiceService,private livreService : LivreService){
    this.commande = new Commande();
  }
  fetchData(){
      this.commandeService.findAll().subscribe(data =>{
        this.commandes = data;
      });
    this.clientService.findAll().subscribe(data1 =>{
      this.clients = data1;
     });
     this.livreService.findAll().subscribe(data1 =>{
      this.livres = data1;
     });
  }
  ngOnInit()  {
    this.fetchData();
    
  }
  title = 'MSprojet';
 
  Ajouter(form: NgForm){
    this.commande.Details.qte= this.qe;
   this.commande.Details.livre= this.ti;
    this.commandeService.save(this.commande).subscribe(()=>{this.fetchData();});
    form.resetForm();

  }
  Supprimer(id : string){
    this.commandeService.delate(id).subscribe(
      data => {
        console.log(data);
        this.fetchData();
      }
    )}

}
