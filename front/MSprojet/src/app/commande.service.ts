import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commande } from './commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private CommandeUrl :string;
  constructor(private http:HttpClient) { 
    this.CommandeUrl='http://localhost:8081/api/commandes';
  }
  public findAll():Observable<Commande[]>{
    return this.http.get<Commande[]>(this.CommandeUrl);
  }
  public save(Commande: Commande){
    return this.http.post<Commande>(this.CommandeUrl,Commande); 
     }
     public delate(id : string){
       return this.http.delete(this.CommandeUrl+'/'+id,{responseType:'text'});
     }
}
