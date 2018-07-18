import { Component, OnInit } from '@angular/core';
import { ChainServiceService } from "../service/chain-service.service";

@Component({
  selector: 'app-shop-crops',
  templateUrl: './shop-crops.component.html',
  styleUrls: ['./shop-crops.component.css']
})
export class ShopCropsComponent implements OnInit {

  constructor(private cs:ChainServiceService) { }
  
  public shops=[];
  public cropdetails=[];

  list_of_shops()
  {
    this.shops.length=0;
    this.cs.shop_ids().then(ids=>{
      ids.forEach(shop_id=>{
        this.cs.shop_name(shop_id).then(shop_name=>{
      this.cs.shop_by_id(shop_id).then(shop_address =>{
        // alert(supplier_name+''+supplier_address)
        let obj={};
        obj['shop_id']=shop_id;
        obj['shop_name']=shop_name;
        obj['shop_address']=shop_address;
        this.shops.push(obj)
      })  
      })
    })
    })
  }

  
  crop_details(shop_id){
    this.cropdetails.length=0;
    this.cs.product_ids().then(ids=>{
      ids.forEach(crop_id=>{
    this.cs.product_detail_map_shop(crop_id,shop_id).then(result=>{
      if(result[1]!=0)
      {
        let obj={};
        obj['crop_id']=crop_id;
        this.cs.product_detail_map(crop_id).then(res =>obj['crop_name']=res[0]);
        obj['crop_quantity']=result[1];
        obj['crop_price']=result[2];
        this.cropdetails.push(obj);
      }
    })
    })

    })


  }


  ngOnInit() {
    this.list_of_shops()

  }

}
