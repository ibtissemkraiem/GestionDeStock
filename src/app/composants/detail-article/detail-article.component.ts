import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss']
})
export class DetailArticleComponent implements OnInit{
  @Input() data:any
 



  constructor(

    private router: Router
  ){}
  ngOnInit(): void {
    console.log(this.data)
    
  }

  



  modifierArticle(): void {
    
    this.router.navigate(['/updatearticle/'+this.data.idArticle]);
    console.log("hedha howa"+this.data.idArticle)
  }

  


}
