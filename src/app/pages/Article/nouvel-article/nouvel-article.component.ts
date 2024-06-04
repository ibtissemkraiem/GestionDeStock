import { Component } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.scss']
})
export class NouvelArticleComponent {

  form: any = {
    designation: null,
    codeArticle: null,
    prixHT: null,
    
    tauxTVA: null,
    idCategorie:null


  };
  isSuccessful = false;
  isAddFailed = false;
  errorMessage = '';

//liste li bsh nrajooha 
//any pour on peut acceder
  Categories?:any[];

  //hatinehom fel constructeur bsh najmou nestaamlhom , 


  constructor(private articleservice : ArticleService , private categorieservice : CategorieService) { }

  ngOnInit(): void {
    //subscribe khaterou ylaweej aala observable

    this.categorieservice.getAllCategories().subscribe({next:data=>{this.Categories=data ;
      console.log(this.Categories)
    }
   }
   
  
  )

  }

//pour teste l'id
  onSelectionChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    console.log('Selected value:', selectedValue);
  }

  onSubmit(): void {
    const { designation, codeArticle, prixHT,tauxTVA ,idCategorie} = this.form;
    console.log(this.form);
   // console.log(username);
   


    this.articleservice.addArticle(designation, codeArticle, prixHT,tauxTVA,idCategorie).subscribe({
      next: data => {
        console.log(data);

        this.isSuccessful = true;
        this.isAddFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isAddFailed = true;
      }
    });

  }

}
