import { Link } from "react-router-dom";
import "./shopItem.css";
import ShopItemPage from "../ShopItemPage/ShopItemPage";

const ShopItems = ({ name, price, type, imageFileName, id, deleteItem }) => {
  function handleDelete() {
    deleteItem(id);
  }

  return (
    <div className="bodyCardItem">
      <Link to={`/ShopItemPage/${id}`}>
        <div className="card-img">
          <img className="img" src={imageFileName} alt="" />
        </div>

        <div className="card-title-row">
          <span className="card-title">{name}</span>
          <div className="card-star"></div>
        </div>

        <h3>Al Karam</h3>
        <h4>(4.1k) Customer Reviews</h4>
      </Link>
      <div className="bodyCardTitle">
        <div className="price">
          <h2 id="price">${price}</h2>
          <div className="row-remove">
            <div id="remove" onClick={handleDelete} className="remove"></div>
            <h5 id="Condition">Almost Sold Out</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItems;
