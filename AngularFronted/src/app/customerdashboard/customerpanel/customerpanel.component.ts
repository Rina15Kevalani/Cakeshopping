import { Component } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';
import { category } from 'src/app/category';
import { productbycategory } from 'src/app/productbycategory';
import { DomElementSchemaRegistry } from '@angular/compiler';

declare var Razorpay:any;


@Component({
  selector: 'app-customerpanel',
  templateUrl: './customerpanel.component.html',
  styleUrls: ['./customerpanel.component.css']
})
export class CustomerpanelComponent {
  [x: string]: any;

catObj?:category[]=[]
catid?:number
cart?:any[]=[]
tot?:number = 0
options?:any
prdtbycat?:productbycategory[]=[]
objResp:any;
authService: any;
router: any;

constructor(private serv:MyserviceService)
{
  this.serv.getallcategory().subscribe(res=>this.catObj=res,err=>console.log(err))
  this.serv.getallproduct().subscribe(res=>this.prdtbycat=res,err=>console.log(err))

}

showValue(){console.log(this.catid)

  this.serv.getallproductbycategory(this.catid).subscribe(res=>
    this.prdtbycat=res,err=>console.log(err) )

}


addtolocalstorage(a?:any)
{
  console.log(a);
  localStorage.setItem(a.prnm,JSON.stringify(a));
}

showcart()
{
  var obj={};
  this.tot=0;
  this.cart=[];

  for (var i = 0; i < localStorage.length; ++i) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    try{
      obj=JSON.parse(value);
      this.tot += obj["price"]
      this.cart.push(obj);
    }catch (e){

    }


}
//console.log(this.cart)

}

  deletecart(a?:any)
  {
  let obj={}
  this.tot=0;
    let index = this.cart.indexOf(a);

    this.cart.splice(index, 1);
    //first delete existing list
    localStorage.removeItem(a.prnm);

    for (var i = 0; i < localStorage.length; ++i) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
      try{
        obj=JSON.parse(value)
      }catch (e){

      }
      this.tot += obj["price"]
      }
  }


  ordernow() {

    let result = window.confirm("Do you really want to confirm the order :");
    if(result)
      {
        this.serv.createTransaction(this.tot).subscribe(
        res => {
          console.log(res);
         this.openTransactionModal(res);


        //call the subscribe email send method + send cart as parameter
        },
        err=>
        {
          alert(" Error in confirming the order ! ");
        console.log(err); })
      }
    else {
        alert("Order is not confirm");
        }

  }

  openTransactionModal(response:any) {
     this.options={
      order_id: response.orderId,
      key:response.key,
      amount:response.amount,
      currency:response.currency,
      name:'Rina kevalani',
      description:'Payment gateway check',
      image:'https://cdn.pixabay.com/photo/2023/05/28/03/34/flowers-8022731_640.jpg',
      handler: (response:any) =>{
        this.processResponse(response);
      },
      prefill:{
        name:'Rina kevalani',
        email:'rina15kevalani@gmail.com',
        contact:'9737804309',
      },
      notes:{
        address:'Online Shopping'
      },
      theme:{
        color:'#F37254'
      }
    };
    let razorPayObject=new Razorpay(this.options);
    razorPayObject.open();
  }

  processResponse(resp:any) {
    console.log(resp);
    const message = "Hey! Our Valuable Customer👨‍💼👩‍💼 Your Payment is Done 😎, with the order id  " +  resp.razorpay_order_id + " " + "  and payment Id " + " " + resp.razorpay_payment_id + " " + "  Once Your Order will Be Shipped, we will send you a message to your registered Number 😄📲";
    alert(message);
  }


  saveF(){
    alert("Your Details Saved!!!😍❤😍 ")
  }
}




