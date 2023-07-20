import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //to hold search value
  searchTerm = new BehaviorSubject('')

    //to hold cart count 
    cartitemcount = new BehaviorSubject(0) ;

  constructor(private http:HttpClient) { this.cartcount() }

  // baseUrl='https://homeworkout-ol90.onrender.com'
  baseUrl='http://localhost:5000'


  //api call for get all products 
  getallproducts(){
    return this.http.get(`${this.baseUrl}/products/all-products`)
  }

  //api call to view product 
  viewproduct(id:any){
    return this.http.get(`${this.baseUrl}/products/view-products/${id}`)
  }

  //api call for add to wishlist 
  addtowishlist(id:any,title:any,price:any,image:any){
  
    const body={
      id,title,price,image
    }
      return this.http.post(`${this.baseUrl}/wishlist/add-to-wishlist`,body)
  }




  //get all items from wishlist to display 
getwishlistitems(){
  return this.http.get(`${this.baseUrl}/wishlist/get-wishlist`)
}


//remove item from wishlist 
removewishlistitem(id:any){
  return this.http.delete(`${this.baseUrl}/wishlist/remove-wishlist-item/${id}`)
}


//add to cart 
addtocart(product:any){

  const body={
    id:product.id,
    title:product.title,
    price:product.price,
    image:product.image,
    quantity:product.quantity

  }
    return this.http.post(`${this.baseUrl}/cart/add-to-cart`,body)
}

//get all items from cart to display 
getcartitems(){
  return this.http.get(`${this.baseUrl}/cart/get-cart`)
}

cartcount(){
    this.getcartitems().subscribe((result:any)=>{ //array of cart items in result
      this.cartitemcount.next(result.length)    // result array length assigned to cartitemcount using next method as it is a behaviour subject 

    })
}


//remove item from cart 
removecartitem(id:any){
  return this.http.delete(`${this.baseUrl}/cart/remove-item/${id}`)
}

//increment cart item quantity 
incrementcount(id:any){
  return this.http.get(`${this.baseUrl}/cart/increment-count/${id}`)
}

//decrement cart item quantity 
decrementcount(id:any){
  return this.http.get(`${this.baseUrl}/cart/decrement-count/${id}`)
}

}
