import { Component, OnInit } from '@angular/core';
import { ChainServiceService } from '../service/chain-service.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-cus-reg',
  templateUrl: './cus-reg.component.html',
  styleUrls: ['./cus-reg.component.css']
})
export class CusRegComponent implements OnInit {

  constructor(private cs:ChainServiceService,private spinner:NgxSpinnerService) { }

  ngOnInit() {
  }
  consumer_registeration(name)
  {
    this.spinner.show();
    this.cs.getAccount().then(address=>{
      this.cs.consumer_registeration(name,address).then(res =>{
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
