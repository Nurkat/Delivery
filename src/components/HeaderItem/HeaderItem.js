const HeaderItem = ({ title }) => {
  return (
    <li className="header__item">
      <a
        className="header__link flex leading-[22px] gap-[32px] text-[#757575] font-medium text-[14px] items-center justify-between"
        href="/"
      >
        {title}
      </a>
    </li>
  );
};
export default HeaderItem;
