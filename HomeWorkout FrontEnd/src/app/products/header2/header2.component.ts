import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit{
  cartitem:Number=0

  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.cartitemcount.subscribe((data:any)=>{
      console.log(data);
      this.cartitem=data ;

      
    })
  }

  search(event:any){
    console.log(event.target.value);
    this.api.searchTerm.next(event.target.value);
    //to assign new values to the behavior subject 
    
    
  }
}
