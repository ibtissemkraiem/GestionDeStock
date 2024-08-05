 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { PageArticleComponent } from './pages/Article/page-article/page-article.component';
import { NouvelArticleComponent } from './pages/Article/nouvel-article/nouvel-article.component';
import { AuthGuard } from './guards/auth.guard';
import { CommandeListComponent } from './composants/commande-list/commande-list.component';
import { UpdateArticleComponent } from './pages/Article/update-article/update-article.component';

const routes: Routes = [
{  path:'login',
  component: PageLoginComponent
},
{  path:'inscription',
  component: PageInscriptionComponent
},

{  path:'',
  component: PageDashboardComponent,
  //canActivateChild:[AuthGuard],

  children:[
   { path:'statistiques',
   component: PageStatistiquesComponent,
   


   },
   { path:'articles',
   component: PageArticleComponent ,
   canActivate:[AuthGuard]


   },
   { path:'ListCommandes',
   component: CommandeListComponent ,
   


   },
   { path:'nouvelarticle',
   component: NouvelArticleComponent ,
   canActivate:[AuthGuard]

   },
   { path:'nouvelarticle/:idArticle',
    component: NouvelArticleComponent ,
    canActivate:[AuthGuard]
 
    },
    { path:'updatearticle/:idArticle',
      component: UpdateArticleComponent ,
      canActivate:[AuthGuard]
   
      }

  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
