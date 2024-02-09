import "./header.css";

import img1 from "../assets/images/image 227.png";
import img2 from "../assets/images/image (8).png";
import img3 from "../assets/images/image (9).png";
import img4 from "../assets/images/image 2 28.png";

const Header = () => {
  return (
    <div className="header navigation">
      <div className="body-header-image">
        <img id="header-img1" src={img1} alt="" />
      </div>

      <div className="body-header-center">
        <img className="image-header-center" src={img2} alt="" />

        <h1>ULTIMATE</h1>
        <h2>SALE</h2>
        <p>NEW COLLECTION</p>

        <button>SHOP NOW</button>
        <img className="image-header-center" src={img3} alt="" />
      </div>

      <div className="body-header-image" id="body-header-image">
        <img id="header-img2" src={img4} alt="" />
      </div>
    </div>
  );
};
export default Header;
