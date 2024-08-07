import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss']
})
export class DetailArticleComponent implements OnInit {
  @Input() data: any;
  imageUrl?: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.data);
    if (this.data && this.data.imagePath) {
      this.imageUrl = `http://localhost:8080/${this.data.imagePath}`; // Adjust based on your API
      console.log(this.imageUrl)
    }
  }

  modifierArticle(): void {
    this.router.navigate(['/updatearticle/' + this.data.idArticle]);
    console.log("Article ID: " + this.data.idArticle);
  }
}
