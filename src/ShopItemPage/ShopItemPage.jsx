import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../useAxios";

const ShopItemPage = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  const [shopItems] = useAxios({ url: "/product" });

  useEffect(() => {
    if (shopItems) {
      const selectedItem = shopItems.find(
        (item) => item.id === parseInt(itemId)
      );
      if (selectedItem) {
        setItem(selectedItem);
      }
    }
  }, [itemId, shopItems]);

  if (!item) {
    return <p>آیتم مورد نظر یافت نشد.</p>;
  }

  console.log(item);

  const { name, price, type, imageFileName, sizes, colors } = item;

  return (
    <div>
      <h2>{name}</h2>
      <p>قیمت: ${price}</p>
      <p>نوع: {type}</p>
      <img src={imageFileName} alt={name} />
      <p>
        {sizes.map((size) => (
          <span>{size}</span>
        ))}
      </p>
    </div>
  );
};

export default ShopItemPage;
