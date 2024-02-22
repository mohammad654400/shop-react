import React, { useState } from "react";
import useAxios from "../useAxios";
import Menu from "../Menu/menu";
import Header from "../Header/header";
import Brands from "../Brands/brands";
import Title from "../Title/title";
import FilterItem from "../FilterItems/filterItems";
import ShopList from "../ShopList/shopList";

const Home = () => {
  const [filterType, setFilterType] = useState("");
  const [shopItems, _, loading, deleteItem, reloadItems] = useAxios({
    url: "/product",
  });

  const filteredShopItems = filterType
    ? shopItems?.filter((item) => item.type === filterType)
    : shopItems;

  return (
    <>
      <Menu />
      <Header />

      <main>
        <Brands />
        <Title />
        <FilterItem setFilterType={setFilterType} />
        <div style={{ width: "80%" }}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {filteredShopItems.length > 0 ? (
                <ShopList
                  shopItems={filteredShopItems}
                  reloadItems={reloadItems}
                  deleteItem={deleteItem}
                />
              ) : (
                <p>No items found for the selected filter.</p>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
