import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




const AUTH_API = 'http://localhost:8080/api/categorie/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) { }

  //httpOptions heya e requestbody


  getAllCategories():Observable <any>{
    return this.http.get(
      AUTH_API + 'getAllCategorie',
        {
         
  
          
        },
        
      );
  


  }
}
