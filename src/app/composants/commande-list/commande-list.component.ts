import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.scss']
})
export class CommandeListComponent implements OnInit{

  //commandes: any[];
  commandes?:any[]=[];

  constructor(private commandeService :CommandeService){}

  ngOnInit(): void {
    this.commandeService.getAllCommandes()
   .subscribe
   (
    {
      next:data=>{this.commandes=data}
    //  console.log(data);
    }
   )
  }

 



}
