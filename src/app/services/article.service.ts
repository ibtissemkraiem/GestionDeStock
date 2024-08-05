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
  updateArticle(designation: string ,codeArticle: string , prixHT: number,  tauxTVA:number,idCategorie:number,articleId?:number) : Observable<any>
{ console.log(articleId);
  return this.http.put(
   
    `${AUTH_API}updateArticle/${articleId}`,

    {
      designation,
        codeArticle,
        prixHT,
        
        tauxTVA,
        idCategorie
       // idArticle

      
    },
  httpOptions

  );
}


  findAllArticles(): Observable<any> {
    return this.http.get(
      AUTH_API + 'getAllArticles',
      {},
     
    );
  }


  findArticleById(idArticle?: number): Observable<any> {
    // Ensure idArticle is provided and is a number
    if (idArticle !== undefined && typeof idArticle === 'number') {
      return this.http.get(`${AUTH_API}getArticleById/${idArticle}`);
    } else {
      throw new Error('idArticle is required and must be a number to fetch the article.');
    }
  }

  
}
