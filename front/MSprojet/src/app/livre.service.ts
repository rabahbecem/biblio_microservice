import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livre } from './livre';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  private clientUrl :string;
  constructor(private http : HttpClient) {
    this.clientUrl='http://localhost:8700/books';
   }
   public findAll():Observable<Livre[]>{
     return this.http.get<Livre[]>(this.clientUrl);
   }
   public save(livre: Livre){
     return this.http.post<Livre>(this.clientUrl,livre); 
      }
      public delate(id : string){
        return this.http.delete(this.clientUrl+"/:"+id,{responseType:'text'});
      }
    }
