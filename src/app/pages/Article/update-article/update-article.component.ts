//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { CategorieService } from 'src/app/services/categorie.service';


@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.scss']
})
export class UpdateArticleComponent implements OnInit {
  form: any = {
    designation: null,
    codeArticle: null,
    prixHT: null,
    
    tauxTVA: null,
    idCategorie:null,
    //articleId:number



  };
  isSuccessful = false;
  isAddFailed = false;
  errorMessage = '';
 

//liste li bsh nrajooha 
//any pour on peut acceder
  Categories?:any[];
  Articles?:[];

data?:any[];
idArticle?:number
  //hatinehom fel constructeur bsh najmou nestaamlhom , 
  

  constructor(private articleservice : ArticleService , private categorieservice : CategorieService,private activatedRoute: ActivatedRoute) { }
 // constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    //subscribe khaterou ylaweej aala observable

    this.categorieservice.getAllCategories().subscribe({next:data=>{this.Categories=data ;
      console.log(this.Categories)
    }
   }
   
  

  )
  //Je veux essayer de recupperer lid article : initialement
//const idArticle =this.activatedRoute.snapshot.params.idArticle;

this.activatedRoute.paramMap.subscribe(params => {
      const articleId = params.get('idArticle'); // Replace 'id' with your actual route parameter name
      console.log('Article ID:', articleId);
     // this.idArticle= +params.get('idArticle');
      if(articleId){
        const idNumber = +articleId;
        this.articleservice.findArticleById(idNumber)
        
        .subscribe({next:data=>{
            this.Articles=data ;
           


           // this.Categories=this.data?.categorie;
            console.log( this.Articles)
          }
        }
       
        )

      }
    });
    

  }

//pour teste l'id
  onSelectionChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    console.log('Selected value:', selectedValue);
  }

  onSubmit(): void {
    //const articleId= this.data?
    
    const { designation, codeArticle, prixHT,tauxTVA ,idCategorie,
     } = this.form;
    console.log(this.form);
   // console.log(username);
   


    this.articleservice.updateArticle(designation, codeArticle, prixHT,tauxTVA,idCategorie).subscribe({
      next: data => {
        //console.log("hedha lid mtaa l onsubmit" + {articleId})
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
