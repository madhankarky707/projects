import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators } from '@angular/forms';
import { ChainServiceService } from '../service/chain-service.service';
import { NgxSpinnerService } from "ngx-spinner";
import swal from 'sweetalert'

@Component({
  selector: 'app-former',
  templateUrl: './former.component.html',
  styleUrls: ['./former.component.css']
})
export class FormerComponent implements OnInit {
  public  farmer_bal;
  angForm:FormGroup;
  constructor(private cs:ChainServiceService,private fb:FormBuilder,private spinner: NgxSpinnerService) 
  { 
  	this.createForm();
  }
  createForm() 
   {
	    this.angForm = this.fb.group({
        cname: ['', Validators.required ],
        pprice: ['', Validators.required ],
        qty:['',Validators.required]
	      // Updaters:['',Validators.required]
	    });
   }


 public product_details=[];
 
  farmer_add_product(product_name,product_price,product_quantity){
    console.log(product_name,product_price,product_quantity);
    this.spinner.show();
    this.cs.getAccount().then(address => {
      this.cs.farmer_add_product(product_name,product_price,product_quantity,address).then(res => {
        this.farmer_crop_table();
        (document.getElementById("id1") as HTMLInputElement).value = "";
        (document.getElementById("id2") as HTMLInputElement).value = "";
        (document.getElementById("id3") as HTMLInputElement).value = "";
        this.farmer_crop_table();
        this.spinner.hide();
        if(res == 1)
        {
          this.spinner.hide();
          swal("Crop Added Successfully")
        }
        else if(res == 0)
        {
          this.spinner.hide();
          swal("You Rejected this Transaction")
        }
        else if(res == 2){
          this.spinner.hide();
          swal("Transaction Failed")
        }
      })
    })
  } 

  farmer_crop_table(){
    this.product_details.length = 0;
    this.cs.getAccount().then(address => {
      this.cs.farmer_id_by_address(address).then(farmer_id => {
        this.cs.product_ids().then(produt_ids => {
          produt_ids.forEach(produt_id=>{
            this.cs.product_detail_map(produt_id).then(p_d => {
              if(p_d[3]==farmer_id)
              {
                let arr = {};
                arr['product_id'] = produt_id;
                arr['product_name']=p_d[0];
                arr['product_price']=p_d[1]/1000000000000000000;
                arr['product_quantity']=p_d[2];
                var tm = new Date(p_d[4].toNumber()*1000);
                var time= tm.toString();
                arr['add_time']=time;
                this.product_details.push(arr);
              }
            })
          });
        })
      })
    })
  }



  farmer_balance(){
    this.farmer_bal = 0;
    this.cs.getAccount().then(address => {
      this.cs.supplier_id_by_address(address).then(farmer_id => {
        this.cs.farmer_balance(farmer_id).then(res => {
          this.farmer_bal = res/1000000000000000000;
        })
      })
    })
  }
  


  withdraw_func(withdrawamt){
    this.cs.getAccount().then(address => {
      this.cs.former_withdraw(withdrawamt*1000000000000000000,address).then(res => {
        if(res == 1)
        {
          swal("Crop Added Successfully")
          this.farmer_balance();
        }
        else if(res == 0)
        {
          swal("You Rejected this Transaction")
        }
        else if(res == 2){
          swal("Transaction Failed")
        }
      });
    });
  }



  ngOnInit() {
    this.farmer_crop_table();
    this.farmer_balance();
  }
}

