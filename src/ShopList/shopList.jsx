import React from "react";
import ShopItems from "../ShopItems/shopItems";
import { Link } from "react-router-dom";

const ShopList = ({ shopItems, reloadItems, deleteItem }) => {
  
  return (
    <div className="row-i">
      {shopItems?.map((shop) => {
        return (
          <div className="card-body" key={shop.id}>
            <ShopItems {...shop} deleteItem={deleteItem} />
          </div>
        );
      })}
    </div>
  );
};

export default ShopList;
