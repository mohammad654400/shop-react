import ShopItems from "../ShopItems/shopItems";

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
