import { FaMagnifyingGlass } from "react-icons/fa6";
import heardtIcon from "../../assets/icons/heardtIcon.png";
import gridIcon from "../../assets/icons/gridIcon.png";
import logo from "../../assets/icons/Icon.png";
import folderDeleteIcon from "../../assets/icons/folderDelete.png";
import lightModeIcon from "../../assets/icons/lightModeIcon.png";
import plusIcon from "../../assets/icons/pluseIcon.png";
const Header = () => {
  return (
    <header className=" border-b border-green-600">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="Logo" className=" cursor-pointer py-10" />
        <div className="flex gap-10 text-3xl items-center">
          <div className="flex gap-2 items-center bg-green-100 w-full md:w-[569px] p-4 text-gray-500 font-normal text-xl rounded-xl">
            <FaMagnifyingGlass />
            <input
              type="text"
              placeholder="Search"
              className="border-none outline-none bg-transparent "
            />
          </div>
          <img src={gridIcon} alt="gridIcon" className=" cursor-pointer" />
          <img src={heardtIcon} alt="heardtIcon" className=" cursor-pointer" />
          <img
            src={folderDeleteIcon}
            alt="folderDeleteIcon"
            className=" cursor-pointer"
          />
          <img
            src={lightModeIcon}
            alt="lightModeIcon"
            className=" cursor-pointer"
          />
          <button className="flex gap-3 items-center text-base text-green-600 font-semibold border-2 border-green-600 rounded-xl px-7 py-3 ">
            <img src={plusIcon} alt="plusIcon" />
            Add Book
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
