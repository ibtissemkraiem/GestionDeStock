import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  username ?: String
  ngOnInit(): void {
   this.username=this.storageService.getUser().username

  }


  constructor (private storageService : StorageService){



  }




}
