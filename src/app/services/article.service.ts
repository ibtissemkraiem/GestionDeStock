import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/article/';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {}

  addArticle(
    designation: string, 
    codeArticle: string, 
    prixHT: number, 
    tauxTVA: number, 
    idCategorie: number, 
    imageFile?: File
  ): Observable<any> {
    const articleRequest = {
      designation,
      codeArticle,
      prixHT,
      tauxTVA,
      idCategorie
    };

    const formData = new FormData();
    formData.append('article', JSON.stringify(articleRequest)); // Add JSON data as a string
    if (imageFile) {
      formData.append('imageFile', imageFile); // Add file if present
    }

    return this.http.post(AUTH_API + 'addArticle', formData)
      .pipe(
        catchError(error => {
          console.error('Error occurred:', error);
          return throwError(error);
        })
      );
  }

  updateArticle(
    designation: string,
    codeArticle: string,
    prixHT: number,
    tauxTVA: number,
    idCategorie: number,
    articleId?: number
  ): Observable<any> {
    console.log(articleId);
    return this.http.put(
      `${AUTH_API}updateArticle/${articleId}`,
      {
        designation,
        codeArticle,
        prixHT,
        tauxTVA,
        idCategorie
      },
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    );
  }

  findAllArticles(): Observable<any> {
    return this.http.get(AUTH_API + 'getAllArticles');
  }

  findArticleById(idArticle?: number): Observable<any> {
    if (idArticle !== undefined && typeof idArticle === 'number') {
      return this.http.get(`${AUTH_API}getArticleById/${idArticle}`);
    } else {
      throw new Error('idArticle is required and must be a number to fetch the article.');
    }
  }
}
