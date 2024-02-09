import "./shopItem.css";

const ShopItems = ({ name, price, type, imageFileName, id, deleteItem }) => {
  function handleDelete() {
    deleteItem(id);
  }

  return (
    <>
      <div className="card-img">
        <img className="img" src={imageFileName} alt="" />
      </div>
      <div className="card-title-row">
        <span className="card-title">{name}</span>
        <div className="card-star"></div>
      </div>
      <h3>Al Karam</h3>
      <h4>(4.1k) Customer Reviews</h4>

      <div className="price">
        <h2 id="price">${price}</h2>
        <div className="row-remove">
          <div id="remove" onClick={handleDelete} className="remove"></div>
          <h5 id="Condition">Almost Sold Out</h5>
        </div>
      </div>
    </>
  );
};

export default ShopItems;
