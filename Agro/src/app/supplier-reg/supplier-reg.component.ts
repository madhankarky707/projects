import { Component, OnInit } from '@angular/core';
import { ChainServiceService } from '../service/chain-service.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-supplier-reg',
  templateUrl: './supplier-reg.component.html',
  styleUrls: ['./supplier-reg.component.css']
})
export class SupplierRegComponent implements OnInit {

  constructor(private cs:ChainServiceService,private spinner:NgxSpinnerService) { }


  ngOnInit() {
  }
  supplier_registeration(name)
  {
    this.spinner.show();
    this.cs.getAccount().then(address=>{
      
      this.cs.supplier_registeration(name,address).then(res => {
        this.spinner.hide();
        if(res == 1)
        {
          alert("Successfully Registered...!");
          
          (document.getElementById("id1") as HTMLInputElement).value = "";
        }
        else if(res == 0)
        {
          
          alert("You Rejected this Transaction...!");
          
          (document.getElementById("id1") as HTMLInputElement).value = "";
        }
        else if(res == 2){
         
          alert("Transaction Failed...!");
          
          (document.getElementById("id1") as HTMLInputElement).value = "";
        }
      })
    })
  }

}
