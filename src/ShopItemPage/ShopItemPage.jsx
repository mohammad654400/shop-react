import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../useAxios";
import "./ShopItemPage.css";

const ShopItemPage = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [listSize, setListSize] = useState("");
  const [activeButtons, setActiveButtons] = useState([]);

  const [shopItems] = useAxios({ url: "/product" });

  useEffect(() => {
    if (shopItems) {
      const selectedItem = shopItems.find(
        (product) => product.id === parseInt(itemId)
      );
      if (selectedItem) {
        setItem(selectedItem);
        setActiveButtons(Array(selectedItem.sizes.length).fill(false));
      }
    }
  }, [itemId, shopItems]);

  if (!item) {
    return <p>آیتم مورد نظر یافت نشد.</p>;
  }

  const { name, price, quantity, imageFileName, sizes, colors } = item;

  const handleSizeClick = (event, size, index) => {
    event.preventDefault();
    setListSize(size);
    const newActiveButtons = Array(sizes.length).fill(false);
    newActiveButtons[index] = true;
    setActiveButtons(newActiveButtons);
  };

  return (
    <div className="body-Shop">
      <div className="row-body-shop">
        <div className="row-with-50">
          <img className="image-shop" src={imageFileName} alt={name} />
        </div>
        <div className="row-with-50">
          <div className="height-product">
            <p>FASCO</p>
            <h1 className="h1">{name}</h1>
            <h2>${price}</h2>
            <p>There are {quantity} items in stock</p>
            <form action="">
              <h3>Size: {listSize}</h3>
              <ul className="ul-shop">
                {sizes.map((size, index) => (
                  <li key={index}>
                    <button
                      className={activeButtons[index] ? "button-click" : ""}
                      onClick={(e) => handleSizeClick(e, size, index)}
                    >
                      {size}
                    </button>
                  </li>
                ))}
              </ul>
              <h3>colors:{}</h3>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItemPage;
