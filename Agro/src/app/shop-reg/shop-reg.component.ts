import { Component, OnInit } from '@angular/core';
import { ChainServiceService } from '../service/chain-service.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-shop-reg',
  templateUrl: './shop-reg.component.html',
  styleUrls: ['./shop-reg.component.css']
})
export class ShopRegComponent implements OnInit {

  constructor(private cs:ChainServiceService,private spinner:NgxSpinnerService) { }
public name;
  ngOnInit() {
  }
  shop_registeration(name)
  {
    this.spinner.show();
    this.cs.getAccount().then(address=>{
      this.cs.shop_registeration(name,address).then(res =>{ 
        this.spinner.hide();
        if(res == 1) {
          (document.getElementById("id1") as HTMLInputElement).value = "";
          alert("Successfully Registered...!");
        }
        else if( res == 0){
          (document.getElementById("id1") as HTMLInputElement).value = "";
          alert("You Rejected this transaction...!");
        }
        else if(res == 2){
          (document.getElementById("id1") as HTMLInputElement).value = "";
          alert("Transaction Failed...!");
        }
      })
    })
  }

}
