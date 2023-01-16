import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  private clientUrl :string;
  constructor(private http : HttpClient) {
    this.clientUrl='http://localhost:8082/api/customers';
   }
   public findAll():Observable<Customer[]>{
     return this.http.get<Customer[]>(this.clientUrl);
   }
   public save(client: Customer){
     return this.http.post<Customer>(this.clientUrl,client); 
      }
      public delate(id : string){
        return this.http.delete(this.clientUrl+'/'+id,{responseType:'text'});
      }
}
