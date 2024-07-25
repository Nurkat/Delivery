import SiteLogo from "../../assets/images/logo-img.svg";
import HeaderItem from "../HeaderItem/HeaderItem";

const Header = () => {
  return (
    <header className="Site-header">
      <div className="containers">
        <div className="header flex justify-between items-center">
          <a href="/" className="header__logo-link">
            <img src={SiteLogo} alt="Site-Logo" width={207} height={50} />
          </a>
          <ul className="header__list flex gap-[32px]">
            <HeaderItem title={"Home"} />
            <HeaderItem title={"About"} />
            <HeaderItem title={"Promotion"} />
            <HeaderItem title={"Blogs"} />
            <HeaderItem title={"Contact Us"} />
          </ul>
          <div className=" header__context">
            <button className="header-text">Masuk</button>
            <button className="site-header-text">Daftar Sekarang</button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
