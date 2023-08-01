import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  searchProduct:any=''
  product:any=[]
  constructor(private api:ApiService){
  }
  ngOnInit(): void {
    this.api.fetchDatafromApi().subscribe((data:any)=>{
      console.log(data);
      this.product=data;
      
    })
  }
  search(event:any){
    console.log(event.target.value);
    this.searchProduct=event.target.value;

    
  }

}
