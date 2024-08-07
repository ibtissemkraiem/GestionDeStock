import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.scss']
})
export class NouvelArticleComponent implements OnInit {

  form: any = {
    designation: null,
    codeArticle: null,
    prixHT: null,
    tauxTVA: null,
    idCategorie: null
  };

  isSuccessful = false;
  isAddFailed = false;
  errorMessage = '';

  Categories?: any[];
  Articles?: any[];

  data?: any[];
  selectedFile?: File; // Add this property to hold the file
  imageUrl: string | ArrayBuffer | null = 'assets/product.png'; // Default image

  constructor(private articleservice: ArticleService, private categorieservice: CategorieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.categorieservice.getAllCategories().subscribe({
      next: data => {
        this.Categories = data;
        console.log(this.Categories);
      }
    });

    this.activatedRoute.paramMap.subscribe(params => {
      const articleId = params.get('idArticle');
      console.log('Article ID:', articleId);
      if (articleId) {
        const idNumber = +articleId;
        this.articleservice.findArticleById(idNumber).subscribe({
          next: data => {
            this.Articles = data;
            console.log(this.Articles);
          }
        });
      }
    });
  }

  // Handle file input change
  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      
      // Preview image
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result; // Base64 image
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

   // Implement this method to handle selection changes
   onSelectionChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    console.log('Selected category ID:', selectedValue);
    this.form.idCategorie = +selectedValue; // Ensure idCategorie is a number
  }

  onSubmit(): void {
    const { designation, codeArticle, prixHT, tauxTVA, idCategorie } = this.form;

    if (!this.selectedFile) {
      console.error('No file selected!');
      this.errorMessage = 'Please select an image file.';
      this.isAddFailed = true;
      return;
    }

    this.articleservice.addArticle(
      designation, 
      codeArticle, 
      prixHT, 
      tauxTVA, 
      idCategorie, 
      this.selectedFile
    ).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isAddFailed = false;

        // Assuming the image URL is in the response and it's relative
        this.imageUrl = 'http://localhost:8080/uploads/' + data.imageName; // Adjust based on your response
      },
      error: err => {
        console.error(err);
        this.errorMessage = 'Failed to add article. Please try again.';
        this.isAddFailed = true;
      }
    });
  }
}

