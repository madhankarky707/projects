pragma solidity ^0.4.24;

contract Agro_supply_chain_management
{
    constructor() public payable
    {
    
    }
    
    event transfer(uint256 from_id,uint256 to_id,uint256 quantity,uint256 time);
    event add_product(uint256 farmer_id,uint256 product_id, uint256 time_added);
    
    struct product_detail
    {
        string product_name;
        uint256 product_price;
        uint256 product_quantity;
        uint256 farmer_id;
        uint256 add_time;
    }
    mapping(uint256 => product_detail) public product_detail_map;   //key1:product_id
    
    uint256 public produt_ids;
    
    mapping(address => uint256) public farmer_id_by_address;  //key:farmer address  value:farmer id
    
    mapping(uint256 => address) public farmer_by_id;  //key:farmer id  value:farmer address
    
    mapping(uint256 => string) public farmer_name;   //key:farmer id  value: farmer name
    
    uint256 public farmer_ids;
    
    function farmer_registeration(string _farmer_name) public payable returns(bool)
    {
        require(farmer_id_by_address[msg.sender] == 0);
        farmer_ids += 1;
        farmer_id_by_address[msg.sender] = farmer_ids;
        farmer_by_id[farmer_ids] = msg.sender;
        farmer_name[farmer_ids] = _farmer_name;
        return true;
    }
    
    function farmer_add_product(string _product_name, uint256 _product_price, uint256 _product_quantity) public payable returns(bool)
    {
        require(farmer_id_by_address[msg.sender] != 0);
        produt_ids += 1;
        product_detail_map[produt_ids].product_name = _product_name;
        product_detail_map[produt_ids].product_price = _product_price;
        product_detail_map[produt_ids].product_quantity = _product_quantity;
        product_detail_map[produt_ids].farmer_id = farmer_id_by_address[msg.sender];
        product_detail_map[produt_ids].add_time = now;
        
        emit add_product(product_detail_map[produt_ids].farmer_id,produt_ids,now);
        return true;
    }
    //supplier
    struct product
    {
        uint256 product_price;
        uint256 product_quantity;
        uint256 seller_id;
    }
    mapping(uint256 =>mapping(uint256 => product)) public product_detail_map_supplier; //key1 :product_id,key2: supplier_id
    
    uint256 public supplier_ids;
    
    mapping(address => uint256) public supplier_id_by_address;  //key:supplier address   value:supplier id
    
    mapping(uint256 => address) public supplier_by_id;   //key: supplier id   value: supplier address
    
    mapping(uint256 => string) public supplier_name;     //key: supplier id   value:  supplier name
    
    function supplier_registeration(string _supplier_name) public payable returns(bool)
    {
        require(supplier_id_by_address[msg.sender] == 0);
        supplier_ids += 1;
        supplier_id_by_address[msg.sender] = supplier_ids;
        supplier_by_id[supplier_ids] = msg.sender;
        supplier_name[supplier_ids] = _supplier_name;
        return true;
    }
    
    function supplier_buy_product(uint256 _product_id, uint256 _product_quantity,uint256 _new_price) public payable returns(bool)
    {
        uint256 su_id = supplier_id_by_address[msg.sender];
        require( su_id != 0);
        // require(product_detail_map_supplier[_product_id][su_id].product_quantity == 0);
        require(product_detail_map[_product_id].product_quantity>=_product_quantity);
        require(product_detail_map[_product_id].product_price*_product_quantity == msg.value);
        
        product_detail_map_supplier[_product_id][su_id].product_price = _new_price;
        product_detail_map_supplier[_product_id][su_id].product_quantity += _product_quantity;
        product_detail_map_supplier[_product_id][su_id].seller_id = product_detail_map[_product_id].farmer_id;
        product_detail_map[_product_id].product_quantity -= _product_quantity;
        
        emit transfer(product_detail_map[_product_id].farmer_id,su_id,_product_quantity,now);
        return true;
    }
    
    
    //shop
    
    mapping(uint256 =>mapping(uint256 => product)) public product_detail_map_shop; //key1 :product id,key2: shop_id
    
    uint256 public shop_ids;
    
    mapping(address => uint256) public shop_id_by_address;   //key:shop address   value: shop id
    
    mapping(uint256 => address) public shop_by_id;    //key:shop id  value:shop address
    
    mapping(uint256 => string) public shop_name;    //key: shop id   value:shop name
    
    function shop_registeration(string _shop_name) public payable returns(bool)
    {
        require(shop_id_by_address[msg.sender] == 0);
        shop_ids += 1;
        shop_id_by_address[msg.sender] = shop_ids;
        shop_by_id[shop_ids] = msg.sender;
        shop_name[shop_ids] = _shop_name;
        return true;
    }
    
    function shop_buy_product(uint256 _product_id, uint256 _product_quantity,uint256 _new_price,uint256 _su_id) public payable returns(bool)
    {
        uint256 shop_id = shop_id_by_address[msg.sender];
        
        require(shop_id != 0);
        // require(product_detail_map_shop[_product_id][shop_id].product_quantity == 0);
        require(product_detail_map_supplier[_product_id][_su_id].product_quantity>=_product_quantity);
        require(product_detail_map_supplier[_product_id][_su_id].product_price*_product_quantity == msg.value);
        
        product_detail_map_shop[_product_id][shop_id].product_price = _new_price;
        product_detail_map_shop[_product_id][shop_id].product_quantity += _product_quantity;
        product_detail_map_shop[_product_id][shop_id].seller_id =product_detail_map_supplier[_product_id][_su_id].seller_id;
        product_detail_map_supplier[_product_id][_su_id].product_quantity -= _product_quantity;
        
        emit transfer(_su_id,shop_id,_product_quantity,now);
        return true;
    }
    
    //consumer
    
    uint256 public consumer_ids;
    
    mapping(address => uint256) public consumer_id_by_address;   //key: consumer address   value: consumer id 
    
    mapping(uint256 => address) public consumer_by_id;    //key: consumer id  value: consumer address
    
    struct consumer
    {
        uint256 product_id;
        uint256 quantity;
        uint256 shop_id;
    }
    mapping(uint256 => mapping(uint256 => consumer)) public consumer_map; //key1:consumer_id   key2: order_id[consumer_id]
    
    mapping(uint256 => uint256) public order_id;  //key: consumer id  value:no of orders
    
    mapping(uint256 => string) public consumer_name;  //key:consumer id  value:consumer name
    
    function consumer_registeration(string _consumer_name) public payable returns(bool)
    {
        require(consumer_id_by_address[msg.sender] == 0);
        consumer_ids += 1;
        consumer_id_by_address[msg.sender] = consumer_ids;
        consumer_by_id[consumer_ids] = msg.sender;
        consumer_name[consumer_ids] = _consumer_name;
        return true;
    }
    
    function consumer_buy_product(uint256 _product_id, uint256 _product_quantity,uint256 _shop_id) public payable returns(bool)
    {
        uint256 consumer_id = consumer_id_by_address[msg.sender];
        
        require(consumer_id != 0);
        require(product_detail_map_shop[_product_id][_shop_id].product_quantity>=_product_quantity);
        require(product_detail_map_shop[_product_id][_shop_id].product_price*_product_quantity == msg.value);
        
        order_id[consumer_id] +=1;
        
        consumer_map[consumer_id][order_id[consumer_id]].product_id = _product_id;
        consumer_map[consumer_id][order_id[consumer_id]].quantity = _product_quantity;
        consumer_map[consumer_id][order_id[consumer_id]].shop_id = _shop_id;
        
        product_detail_map_shop[_product_id][_shop_id].product_quantity -= _product_quantity;
        
        emit transfer(_shop_id,consumer_id,_product_quantity,now);
        
        return true;
    
    }
}