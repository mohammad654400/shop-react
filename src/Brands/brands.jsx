import img from "../assets/images/logo.png";
import img1 from "../assets/images/logo (1).png";
import img2 from "../assets/images/logo (2).png";
import img3 from "../assets/images/logo (3).png";
import img4 from "../assets/images/logo (4).png";

const Brands = () => {
  return (
    <section className="brands">
      <div>
        <img className="brands-img" src={img} alt="" />
        <img className="brands-img" src={img1} alt="" />
        <img className="brands-img" src={img2} alt="" />
        <img className="brands-img" src={img3} alt="" />
        <img className="brands-img" src={img4} alt="" />
      </div>
    </section>
  );
};
export default Brands;
