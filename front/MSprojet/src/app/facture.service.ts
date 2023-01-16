import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facture } from './facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  private FactureUrl :string;
  constructor(private http:HttpClient) { 
    this.FactureUrl='http://localhost:8083/api/invoices';
  }
  public findAll():Observable<Facture[]>{
    return this.http.get<Facture[]>(this.FactureUrl);
  }
  public save(Facture: Facture){
    return this.http.post<Facture>(this.FactureUrl,Facture); 
     }
     public delate(id : string){
       return this.http.delete(this.FactureUrl+'/'+id,{responseType:'text'});
     }
}
