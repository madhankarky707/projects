import { Component, OnInit } from '@angular/core';
import { ChainServiceService } from '../service/chain-service.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-shopwithdraw',
  templateUrl: './shopwithdraw.component.html',
  styleUrls: ['./shopwithdraw.component.css']
})
export class ShopwithdrawComponent implements OnInit {

  public  shop_bal;
  constructor(private cs:ChainServiceService,private spinner: NgxSpinnerService){}


  shop_balance(){
    this.shop_bal = 0;
    this.cs.getAccount().then(address => {
      this.cs.shop_id_by_address(address).then(shop_id => {
        this.cs.shop_balance(shop_id).then(res => {
          this.shop_bal = res/1000000000000000000;
        })
      })
    })
  }
  
  
  shop_widthdraw(amount_to_widthdraw){
    this.spinner.show();

    if((document.getElementById('id1') as HTMLInputElement).value == '' || amount_to_widthdraw<=0){
      alert("Please Enter a Valid amount...!");
      (document.getElementById("id1") as HTMLInputElement).value = "";
      return;
    }
    this.cs.getAccount().then(address => {
      this.cs.shop_id_by_address(address).then(shop_id => {
        this.cs.shop_balance(shop_id).then(res => {
          this.shop_bal = res/1000000000000000000;
          if( this.shop_bal>=amount_to_widthdraw){
          
            this.cs.shop_widthdraw(amount_to_widthdraw*1000000000000000000,address).then(res =>{
            (document.getElementById("id1") as HTMLInputElement).value = "";
            this.spinner.hide();
            if(res == 1)
            {
              alert("Amount Successfully Added to your Account")
              this.shop_balance();
            }
            else if(res == 0)
            {
              alert("You Rejected this Transaction")
            }
            else if(res == 2){
              alert("Transaction Failed")
            }
          })
          }
          else{
            (document.getElementById("id1") as HTMLInputElement).value = "";
            alert("You Can Withdraw Upto"+ this.shop_bal);
          }
        })
      
      })
    })

 
  
  }

  ngOnInit() {

    this.shop_balance();
  }

}
