import React from "react";

const FilterItem = ({ setFilterType }) => {
  const handleClick = (content) => {
    setFilterType(content);
  };

  return (
    <section id="new-arrivals">
      <nav id="nav-arrivals">
        <ul id="nav-ul-arrivals" className="nav-ul-arrivals">
          <li>
            <button className="nav-arrivals" onClick={() => handleClick("men")}>
              Men’s Fashion
            </button>
          </li>
          <li>
            <button
              className="nav-arrivals"
              onClick={() => handleClick("women")}
            >
              Women’s Fashion
            </button>
          </li>
          <li>
            <button
              className="nav-arrivals"
              onClick={() => handleClick("child")}
            >
              Child Accessories
            </button>
          </li>
        </ul>

        <ul className="ul-profile" id="ul-profile">
          <li>
            <button className="profile" onClick={() => handleClick("men")}>
              <img
                data-content="men"
                src="../assets/images/profile (1).png"
                alt="profileMen"
                className="image-profile"
              />
            </button>
          </li>

          <li>
            <button className="profile" onClick={() => handleClick("women")}>
              <img
                data-content="women"
                src="../assets/images/profileWomen"
                alt="profileWomen"
                className="image-profile"
              />
            </button>
          </li>

          <li>
            <button className="profile" onClick={() => handleClick("child")}>
              <img
                data-content="child"
                src="../assets/images/profile.png"
                alt="profileChild"
                className="image-profile"
              />
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default FilterItem;
