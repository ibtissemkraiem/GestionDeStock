import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.scss']
})
export class PageArticleComponent implements OnInit {
  articles:Observable<any>[]=[];
 // errorMsg = '';

  constructor(
   // private router: Router,
    private articleService: ArticleService
  ) { }

 


  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(){
    this.articleService.findAllArticles().subscribe({
      next:data =>{this.articles=data}
    })
  }
  


}
