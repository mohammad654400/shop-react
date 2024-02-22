const Menu = () => {
  return (
    <nav className="navigation">
      <p>FASCO</p>

      <ul className="header-list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Deals</a>
        </li>
        <li>
          <a href="#">Bookings</a>
        </li>
        <li>
          <a href="#">New Arrivals</a>
        </li>
        <li>
          <a href="#">Packages</a>
        </li>
        <li>
          <a href="#">Sign in</a>
        </li>
        <li>
          <a href="#">
            <button className="btnNav">Sign up</button>
          </a>
        </li>
      </ul>
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <li>
            <a className="menu__item" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="menu__item" href="#">
              About
            </a>
          </li>
          <li>
            <a className="menu__item" href="#">
              Team
            </a>
          </li>
          <li>
            <a className="menu__item" href="#">
              Contact
            </a>
          </li>
          <li>
            <a className="menu__item" href="#">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Menu;
