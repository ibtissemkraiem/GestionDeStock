import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
public menuProperties : Array<Menu> = [{

  id:1,
  titre:'Tableau de bord',
  icon:'',
  url:'',
  sousMenu:[{
    id:11,

    titre:'Vue d\'ensemble',
    icon:'',
    url:''


  },
  {
    id:12,

    titre:'Statistiques',
    icon:'',
    url:'statistiques'


  },
]

},
{
  id:2,

  titre:'Articles',
  icon:'',
  url:'',
  sousMenu:[
    {
      id:21,
  
      titre:'Articles',
      icon:'',
      url:'articles'
  
  
    },
    {
      id:22,
  
      titre:'Mouvements du stock',
      icon:'',
      url:''
  
  
    },
  ]


},


{
  id:3,

  titre:'Clients',
  icon:'',
  url:'',
  sousMenu:[
    {
      id:31,
  
      titre:'Clients',
      icon:'',
      url:''
  
  
    },
    {
      id:32,
  
      titre:'Commandes clients',
      icon:'',
      url:'ListCommandes'
  
  
    },
  ]


},
{
  id:4,

  titre:'Fournisseurs',
  icon:'',
  url:'',
  sousMenu:[
    {
      id:41,
  
      titre:'Fournisseurs',
      icon:'',
      url:''
  
  
    },
    {
      id:42,
  
      titre:'Commandes fournisseurs',
      icon:'',
      url:''
  
  
    },
  ]


},
{
  id:5,

  titre:'Paramétrage',
  icon:'',
  url:'',
  sousMenu:[
    {
      id:51,
  
      titre:'Catégorie',
      icon:'',
      url:''
  
  
    },
    {
      id:52,
  
      titre:'Utilisateurs',
      icon:'',
      url:''
  
  
    },
  ]


},


];
 

  
  constructor(
    private router: Router
  ){
    
  }


  ngOnInit(): void {

  }
  
  toggleCollapse(menuId: number) {
    const menu = this.menuProperties.find(menu => menu.id === menuId);
    if (menu) {
      menu.isOpen = !menu.isOpen;
    }
  }
  navigate(url?:string): void{
    this.router.navigate( [url]);

  }

}
