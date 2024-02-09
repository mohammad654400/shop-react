import ShopItems from "../ShopItems/shopItems";
const ShopList = ({ shopItems }) => {
  return (
    <div className="row-i">
      {shopItems?.map((shop) => {
        return (
          <div
          className="card-body "
            key={shop.id}
          >
            <ShopItems {...shop} />
          </div>
        );
      })}
    </div>
  );
};
export default ShopList;
