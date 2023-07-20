import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{
  allwishlistitem:any=[]    //to hold wishlist data
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.getwishlistitems().subscribe((result:any)=>{
      console.log(result);
      this.allwishlistitem = result; //assign array of wishlist data to wishlist
      
    },
    (result:any)=>{
      console.log(result.error);
      
    })
  }



  removewishlistitem(id:any){
    this.api.removewishlistitem(id).subscribe((result:any)=>{
      console.log(result);
      this.allwishlistitem=result
      alert('Product Removed From Wishlist')
    },
    (result:any)=>{
      console.log(result.error);

    })
  }

  addtocart(product:any){
    console.log(product);
    Object.assign(product,{quantity:1})  
    //api call 
    this.api.addtocart(product).subscribe((result:any)=>{
      this.api.cartcount()
      this.removewishlistitem(product.id)
      alert(result) ; 

    },
    (result:any)=>{
      alert(result.error) ;
    })
  }
}
