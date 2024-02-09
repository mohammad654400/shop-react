import "./App.css";
import useAxios from "./useAxios";
import Menu from "./Menu/menu";
import Header from "./Header/header";
import Brands from "./Brands/brands";
import Title from "./Title/title";
import FilterItem from "./FilterItems/filterItems";
import shopItems from "./ShopItems/shopItems";
import { useState } from "react";
import ShopList from "./ShopList/shopList";

function App() {
  const [shopItems, _, loading] = useAxios({
    url: "/product",
  });

  const renderContent = () => {
    if (loading) {
      return "<Loading />";
    }
    if (shopItems?.length == 0) {
      return (
        <div>
          <p>هیچ آیتمی یافت وجود ندارد</p>
        </div>
      );
    }
    console.log("shopItems", shopItems);
    return <ShopList shopItems={shopItems} />;
  };
  return (
    <>
      <Menu></Menu>
      <Header></Header>

      <main>
        <Brands></Brands>
        <Title></Title>
        <FilterItem></FilterItem>
        <div style={{ width: "80%" }}>{renderContent()}</div>
      </main>
    </>
  );
}

export default App;
