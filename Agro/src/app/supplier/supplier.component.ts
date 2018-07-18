import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators } from '@angular/forms';
import { ChainServiceService } from '../service/chain-service.service';
import { NgxSpinnerService } from "ngx-spinner";
import swal from 'sweetalert'
@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor(private cs:ChainServiceService,private fb:FormBuilder,private spinner: NgxSpinnerService) {	this.createForm(); }
  angForm:FormGroup;
  public available_crops = [];
  public purchased_crops = [];
  // public crop_details = [];
  public supplier_bal;

  createForm() 
  {
     this.angForm = this.fb.group({
       pid: ['', Validators.required ],
       qty: ['', Validators.required ],
      
       price:['',Validators.required]
       // Updaters:['',Validators.required]
     });
  }

  buy_crop(product_id,product_quantity,new_price){
    // console.log(product_id,product_quantity,new_price);
    if((document.getElementById('id1') as HTMLInputElement).value ==''){
      swal("Please Enter the Crop Id")
      return;
    }
    if((document.getElementById('id2') as HTMLInputElement).value ==''){
      swal("Please Enter the Quantity")
      return;
    }
    if((document.getElementById('id3') as HTMLInputElement).value ==''){
      swal("Please Enter the Update Price")
      return;
    }
    this.spinner.show();
    this.cs.getAccount().then(address =>{
      this.cs.product_detail_map(product_id).then(p_d =>{
        console.log(p_d[1].toNumber() *product_quantity);
        
        this.cs.supplier_buy_product(product_id,product_quantity,new_price*1000000000000000000,address,(p_d[1].toNumber() *product_quantity)).then(res => {
          (document.getElementById("id1") as HTMLInputElement).value = "";
          (document.getElementById("id2") as HTMLInputElement).value = "";
          (document.getElementById("id3") as HTMLInputElement).value = "";

          this.available_crops_to_purchase();
          this.Purchased_crops_table();
          this.spinner.hide();
          if(res == 1)
          {
            swal("You Bought Crop Successfully")
          }
          else if(res == 0)
          {
            swal("You Rejected this Transaction")
          }
          else if(res == 2){
            swal("Transaction Failed")
          }
        })
      })
    })
  }

// cropdetails(){
//   this.crop_details.length = 0;
//   this.cs.product_ids().then(product_ids => {
//     product_ids.forEach(product_id=>{
//       this.cs.product_detail_map(product_id).then(p_d => {
//         if(p_d[2] != 0)
//         {
//           let obj = {};
//           obj['crop_id'] = product_id;
//           obj['crop_name'] = p_d[0];
//           this.crop_details.push(obj);
//         }
//       })
//     })
//   })
// }


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
    this.cs.getAccount().then(address =>{
      this.cs.supplier_widthdraw(amount_to_widthdraw*1000000000000000000,address).then(res =>{
        if(res == 1)
        {
          swal("Amount Successfully Added to your Account")
          this.supplier_balance();
        }
        else if(res == 0)
        {
          swal("You Rejected this Transaction")
        }
        else if(res == 2){
          swal("Transaction Failed")
        }
      })
    })
  }



  available_crops_to_purchase(){
    this.available_crops.length = 0;
    this.cs.product_ids().then(product_ids => {
      product_ids.forEach(product_id=>{
        this.cs.product_detail_map(product_id).then(p_d => {
          if(p_d[2] != 0)
          {
            
            let obj = {};
            obj['cropid'] = product_id;
            obj['cropname'] = p_d[0];
            var tm = new Date(p_d[4].toNumber()*1000);
            var time= tm.toString();
            obj['date'] = time;
            obj['quantity'] = p_d[2];
            obj['price'] = p_d[1]/1000000000000000000;
            obj['farmerid'] = p_d[3];
            this.available_crops.push(obj);
          }
        })
      })
    })
  }


  Purchased_crops_table(){
    this.purchased_crops.length = 0;
    this.cs.getAccount().then(address =>{
      this.cs.supplier_id_by_address(address).then(supplier_id =>{
        this.cs.product_ids().then(product_ids=>{
          product_ids.forEach(product_id => {
            this.cs.product_detail_map_supplier(product_id,supplier_id).then(p_d_s => {
              this.cs.product_detail_map(product_id).then(p_d => {
                if(p_d_s[2] != 0){
                  let obj = {};
                  obj['cropid'] = product_id;
                  obj['cropname'] = p_d[0];
                  var tm = new Date(p_d[4].toNumber()*1000);
                  var time= tm.toString();
                  obj['date'] = time;
                  obj['farmerid'] = p_d[3];
                  obj['price'] = p_d_s[0]/1000000000000000000;
                  obj['quantity'] = p_d_s[1];
                  
                  this.purchased_crops.push(obj);
                }
              })
            })
          })
        })
      })
    })
  }

  ngOnInit() {
    this.supplier_balance();
    this.available_crops_to_purchase();
    this.Purchased_crops_table();
  }
}