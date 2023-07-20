import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{
  allProducts:any=[]
// product: any;
searchTerm:string=''
product:any={}


  
constructor(private api:ApiService){

}
  ngOnInit(): void {
    this.api.getallproducts().subscribe((result:any)=>{
      console.log(result);//array of products [20]
      this.allProducts= result
    })

        // this.searchTerm=this.api.searchTerm; 
        this.api.searchTerm.subscribe((result:any)=>{
          this.searchTerm=result;
          console.log(this.searchTerm);
    
        })
  }



  addtocart(product:any){
    console.log(product); //as quantity not in the consoled object, we should add it using assign() method 
    //adding a key value pair to an existing object using assign()
    Object.assign(product,{quantity:1})
    
    //api call 
    this.api.addtocart(product).subscribe((result:any)=>{
      this.api.cartcount()
      alert(result) ; 

    },
    (result:any)=>{
      alert(result.error) ;
    })
  }


}
