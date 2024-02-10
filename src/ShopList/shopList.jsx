import React from "react";
import ShopItems from "../ShopItems/shopItems";
import { Link } from "react-router-dom";

const ShopList = ({ shopItems, reloadItems, deleteItem }) => {
  return (
    <div className="row-i">
      {shopItems?.map((shop) => {
        return (
          <div className="card-body" key={shop.id}>
            <Link to={`/shopitem/${shop.id}`}>
              <ShopItems {...shop} deleteItem={deleteItem} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ShopList;
