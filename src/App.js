import "./App.css";
import useAxios from "./useAxios";
import Menu from "./Menu/menu";
import Header from "./Header/header";
import Brands from "./Brands/brands";
import Title from "./Title/title";
import FilterItem from "./FilterItems/filterItems";
import ShopList from "./ShopList/shopList";
import ShopItemPage from "./ShopItemPage/ShopItemPage";

function App() {
  const [shopItems, _, loading, deleteItem, reloadItems] = useAxios({
    url: "/product",
  });

  const renderContent = () => {
    if (loading) {
      return "<Loading />";
    }
    if (!shopItems || shopItems.length === 0) {
      return (
        <div>
          <p>هیچ آیتمی یافت وجود ندارد</p>
        </div>
      );
    }
    console.log("shopItems", shopItems);
    return (
      <ShopList
        shopItems={shopItems}
        reloadItems={reloadItems}
        deleteItem={deleteItem}
      />
    );
  };

  return (
    <>
      <Menu></Menu>
      <Header></Header>

      <main>
        <Brands></Brands>
        <Title></Title>
        <FilterItem></FilterItem>
        <div style={{ width: "80%" }}>
          {renderContent()}

          <ShopItemPage />
        </div>
      </main>
    </>
  );
}

export default App;
