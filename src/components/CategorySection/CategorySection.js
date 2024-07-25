import CupCake from "../../assets/images/Cake.png";
import PrevIcon from "../../assets/images/prev-icon.svg";
import NextIcon from "../../assets/images/next-icon.svg";
import { hover } from "@testing-library/user-event/dist/hover";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      img: CupCake,
      title: "CupCake",
      count: "22 Items",
      bg: "#F0FEEB",
    },
    {
      id: 2,
      img: CupCake,
      title: "Pizza",
      count: "25 Items",
      bg: "#E4F2F4",
    },
    {
      id: 3,
      img: CupCake,
      title: "Kebab",
      count: "12 Items",
      bg: "#EAEEFA",
    },
    {
      id: 4,
      img: CupCake,
      title: "Salmon",
      count: "22 Items",
      bg: "#F9EEF3",
    },
    {
      id: 5,
      img: CupCake,
      title: "Doughnut",
      count: "11 Items",
      bg: "#F3F7D9",
    },
  ];
  return (
    <div className="category-section">
      <div className="containers">
        <div className="w-[730px] h-[100px]">
          <h1 className="font-medium text-[38px] leading-[50px]">
            Browser Our Category
          </h1>
          <p className="font-medium text-[38px] leading-[50px] text-[#8BAC3E;]">
            Receipt
          </p>
        </div>
        <ul className="flex justify-between w-[1200px] mx-auto mt-[32px]">
          {categories.map((item, index) => (
            <li
              style={{ backgroundColor: item.bg }}
              className={`w-[230px] py-[30px]  text-center`}
              key={index}
            >
              <img
                className="mx-auto mb-[11px]"
                src={item.img}
                alt="category img"
                width={47}
                height={52}
              />
              <h2 className="mb-[4px] font-medium text-[16px] leading-[22px]">
                {item.title}
              </h2>
              <p className="font-normal leading-[16px] text-[14px]">
                {item.count}
              </p>
            </li>
          ))}
        </ul>
        <div className="flex justify-end gap-[10px] mt-[40px]">
          <button
            type="button"
            className="w-[113px] flex items-center bg-[#8BAC3E] text-white rounded-[30px] px-[13px] py-[9px]  "
          >
            <img
              className="bg-white rounded-[50%] p-[4px]"
              src={PrevIcon}
              alt="Prev icon"
            />
            <p className="mx-auto">Prev</p>
          </button>
          <button
            type="button"
            className=" w-[113px] flex items-center  bg-[#8BAC3E;] text-white rounded-[30px] px-[13px] py-[9px] gap-[6px]"
          >
            <p className="mx-auto">Next</p>
            <img
              className="bg-white rounded-[50%] p-[4px]"
              src={NextIcon}
              alt="Next icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
