const FilterItem = () => {
  return (
    <section id="new-arrivals">
      <nav id="nav-arrivals">
        <ul id="nav-ul-arrivals" className="nav-ul-arrivals">
          <li>
            <a data-content="men" href="#" className="nav-arrivals">
              Men’s Fashion
            </a>
          </li>
          <li>
            <a data-content="women" href="#" className="nav-arrivals">
              Women’s Fashion
            </a>
          </li>

          <li>
            <a data-content="child" href="#" className="nav-arrivals">
              child Accessories
            </a>
          </li>
        </ul>

        <ul className="ul-profile" id="ul-profile">
          <li>
            <a href="#">
              <div class="profile">
                <img
                  data-content="men"
                  src="../assets/images/profile (1).png"
                  alt="profileMen"
                  className="image-profile"
                />
              </div>
            </a>
          </li>

          <li>
            <a href="#">
              <div class="profile">
                <img
                  data-content="men"
                  src="../assets/images/profileMen"
                  alt="profileMen"
                  className="image-profile"
                ></img>
              </div>
            </a>
          </li>

          <li>
            <a href="#">
              <div class="profile">
                <img
                  data-content="men"
                  src="../assets/images/profile.png"
                  alt="profileMen"
                  className="image-profile"
                />
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};
export default FilterItem;
