import { Component, OnInit } from '@angular/core';
import { ChainServiceService } from '../service/chain-service.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';

@Component({
  selector: 'app-former-reg',
  templateUrl: './former-reg.component.html',
  styleUrls: ['./former-reg.component.css']
})
export class FormerRegComponent implements OnInit {

  constructor(private cs:ChainServiceService,private router:Router,private spinner:NgxSpinnerService) { }

  ngOnInit() {
  }
  farmer_registeration(name)
  {
    this.spinner.show();
    this.cs.getAccount().then(address=>{
      this.cs.farmer_registeration(name,address).then(res =>{
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
