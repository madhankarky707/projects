import { Component, OnInit } from '@angular/core';
import { ChainServiceService } from '../service/chain-service.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-supplierwithdraw',
  templateUrl: './supplierwithdraw.component.html',
  styleUrls: ['./supplierwithdraw.component.css']
})
export class SupplierwithdrawComponent implements OnInit {

  public  supplier_bal;
  constructor(private cs:ChainServiceService,private spinner: NgxSpinnerService){
    this.cs.getAccount().then(address=>{
    this.cs.supplier_id_by_address(address).then(supplier_id => {
      this.cs.supplier_balance(supplier_id).then(res => {
        this.supplier_bal = res/1000000000000000000;
      })
    })
    })
  }



  
  supplier_balance(){
    this.supplier_bal = 0;
    this.cs.getAccount().then(address => {
      this.cs.supplier_id_by_address(address).then(supplier_id => {
        this.cs.supplier_balance(supplier_id).then(res => {
          this.supplier_bal = res/1000000000000000000;
        })
      })
    })
  }
  
  supplier_withdraw_func(amount_to_widthdraw){
    this.spinner.show();
    if((document.getElementById('id1') as HTMLInputElement).value == '' || amount_to_widthdraw<=0){
      alert("Please Enter a Valid amount...!");
      (document.getElementById("id1") as HTMLInputElement).value = "";
      return;
    }
    
    this.cs.getAccount().then(address=>{
      this.cs.supplier_id_by_address(address).then(supplier_id => {
        this.cs.supplier_balance(supplier_id).then(res => {
          this.supplier_bal = res/1000000000000000000;
          //alert(this.supplier_bal);

          if(this.supplier_bal >=amount_to_widthdraw){
            this.cs.supplier_widthdraw(amount_to_widthdraw*1000000000000000000,address).then(res =>{
              
              (document.getElementById("id1") as HTMLInputElement).value = "";
              this.spinner.hide();
              if(res == 1)
              {
                alert("Amount Successfully Added to your Account")
                this.supplier_balance();
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
            alert("You can withdraw upto"+this.supplier_bal);
          }
        })
      })
     })

    this.cs.getAccount().then(address =>{
      
    })
  }



  ngOnInit() {

    this.supplier_balance();
  }

}

