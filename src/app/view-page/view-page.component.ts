import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {

  viewId:any='';
  product:any=[];
  constructor(
    private activatedRoute :ActivatedRoute,
    private api:ApiService
  ){}
  ngOnInit(): void {
this.activatedRoute.params.subscribe((data:any)=>{
  this.viewId=data.id;
  this.api.viewProduct(this.viewId).subscribe((result:any)=>{
    this.product=result;
  })
})
  }

}
