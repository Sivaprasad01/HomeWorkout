import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  allcartitems:any=[]
  totalprice:number=0
  grandtotal:number=0

username:string=''
housenumber:string=''
street:string=''
pincode:string=''
state:string=''

paymentstatus:boolean=false
offerstatus:boolean=false
discountstatus:boolean=true

public payPalConfig?: IPayPalConfig;
showSuccess:boolean=false
showpaypal:boolean=false

    constructor(private api:ApiService,private cartFB:FormBuilder){}


    addressform=this.cartFB.group({
      username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      housenumber:['',[Validators.required,Validators.pattern('[0-9]*')]],
      street:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      pincode:['',[Validators.required,Validators.pattern('[0-9]*')]],
      state:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]]
    })


  ngOnInit(): void {
    // this.initConfig();
    this.api.getcartitems().subscribe((result:any)=>{
      
      console.log(result );
      this.allcartitems=result ; 

      //call getcarttotal
      this.getcarttotal()
      this.api.cartcount()
    },
    (result:any)=>{
      console.log(result.error);
      
    })
  }

  removeCartItem(id:any){
    this.api.removecartitem(id).subscribe((result:any)=>{
      console.log(result);
      this.allcartitems=result;
      this.api.cartcount()
      this.getcarttotal()
    },
    (result:any)=>{
      console.log(result.error);

    })
  }

getcarttotal(){
 let total=0 
 this.allcartitems.forEach((item:any)=>{
  this.grandtotal=item.price*item.quantity
  total=total+this.grandtotal
  this.totalprice=Math.ceil(total)
 })
}

incrementcount(id:any){
    this.api.incrementcount(id).subscribe((result:any)=>{
      this.allcartitems=result
      this.getcarttotal()

    },
    (result:any)=>{
      console.log(result.error);
      
    })
}


decrementcount(id:any){
  this.api.decrementcount(id).subscribe((result:any)=>{
    this.allcartitems=result
    this.getcarttotal()
    this.api.cartcount()

  },
  (result:any)=>{
    console.log(result.error);
    
  })
}



submitform(){
  if(this.addressform.valid){
    this.paymentstatus=true
    console.log(this.addressform);
    this.username=this.addressform.value.username||""
    this.housenumber=this.addressform.value.housenumber||""
    this.street=this.addressform.value.street||""
    this.pincode=this.addressform.value.pincode||""
    this.state=this.addressform.value.state||""
    
  }
  else{
    alert('Please provide valid details')
  }
}

offers(){
this.offerstatus=true 
this.discountstatus=false

}

discounts(value:any){
  this.totalprice= Math.ceil(this.totalprice*(100-value)/100)  ;
  this.discountstatus=true
}

makepayment(){
  this.showpaypal=true
}

modalclose(){
  this.addressform.reset();
  this.showpaypal=false 
  this.showSuccess=false 
  this.paymentstatus=false
}


private initConfig(): void {
  this.payPalConfig = {
  currency: 'EUR',
  clientId: 'sb',
  createOrderOnClient: (data) => <ICreateOrderRequest>{
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'EUR',
          value: '9.99',
          breakdown: {
            item_total: {
              currency_code: 'EUR',
              value: '9.99'
            }
          }
        },
        items: [
          {
            name: 'Enterprise Subscription',
            quantity: '1',
            category: 'DIGITAL_GOODS',
            unit_amount: {
              currency_code: 'EUR',
              value: '9.99',
            },
          }
        ]
      }
    ]
  },
  advanced: {
    commit: 'true'
  },
  style: {
    label: 'paypal',
    layout: 'vertical'
  },
  onApprove: (data, actions) => {
    console.log('onApprove - transaction was approved, but not authorized', data, actions);
    actions.order.get().then((details:any) => {
      console.log('onApprove - you can get full order details inside onApprove: ', details);
    });
  },
  onClientAuthorization: (data) => {
    console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
    this.showSuccess = true;
  },
  onCancel: (data, actions) => {
    console.log('OnCancel', data, actions);
  },
  onError: err => {
    console.log('OnError', err);
  },
  onClick: (data, actions) => {
    console.log('onClick', data, actions);
  },
};
}


}

