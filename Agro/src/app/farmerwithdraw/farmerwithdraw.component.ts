import { Component, OnInit } from '@angular/core';
import { ChainServiceService } from '../service/chain-service.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-farmerwithdraw',
  templateUrl: './farmerwithdraw.component.html',
  styleUrls: ['./farmerwithdraw.component.css']
})
export class FarmerwithdrawComponent implements OnInit {
  public  farmer_bal;
  constructor(private cs:ChainServiceService,private spinner: NgxSpinnerService){}



  farmer_balance(){
      this.farmer_bal = 0;
      this.cs.getAccount().then(address => {
        this.cs.farmer_id_by_address(address).then(farmer_id => {
          this.cs.farmer_balance(farmer_id).then(res => {
            this.farmer_bal = res/1000000000000000000;
          })
        })
      })
    }
    
  
  
    withdraw_func(withdrawamt){
      this.spinner.show();
      if((document.getElementById('id1') as HTMLInputElement).value == '' || withdrawamt<=0){
        alert("Please Enter a Valid amount...!");
        (document.getElementById("id1") as HTMLInputElement).value = "";
        return;
      }
      this.cs.getAccount().then(address => {
        this.cs.farmer_id_by_address(address).then(farmer_id => {
          this.cs.farmer_balance(farmer_id).then(res => {
            this.farmer_bal = res/1000000000000000000;
            if( this.farmer_bal>=withdrawamt){

            
            this.cs.former_withdraw(withdrawamt*1000000000000000000,address).then(res => {
              (document.getElementById("id1") as HTMLInputElement).value = "";
              this.spinner.hide();
              if(res == 1)
              {
                alert(" Amount Successfully Added to your Accounty")
                this.farmer_balance();
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
              alert("You Can Withdraw Upto" + this.farmer_bal);
              (document.getElementById("id1") as HTMLInputElement).value = "";
            }
          })
        })
      })
      
        
    
    }
  
  
  

  ngOnInit() {

    this.farmer_balance();
  }

}
