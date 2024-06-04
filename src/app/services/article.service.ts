import { HttpHeaders ,HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const AUTH_API = 'http://localhost:8080/api/article/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {}



  addArticle(designation: string ,codeArticle: string , prixHT: number,  tauxTVA:number,idCategorie:number): Observable<any>{
    return this.http.post(
    AUTH_API + 'addArticle',
      {
        designation,
        codeArticle,
        prixHT,
        
        tauxTVA,
        idCategorie

        
      },
      httpOptions
    );

  }
}
