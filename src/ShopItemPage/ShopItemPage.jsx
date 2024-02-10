import React from "react";
import { useParams } from "react-router-dom";

const ShopItemPage = () => {
  const { itemId } = useParams();

  return (
    <div>
      <p>{itemId}</p>
    </div>
  );
};

export default ShopItemPage;
