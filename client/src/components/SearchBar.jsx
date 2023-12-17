import React from "react";
import { TbSearch } from "react-icons/tb";
import { TbPlus } from "react-icons/tb";
const SearchBar = ({ setShowMyModal }) => {
  return (
    <div>
      <div className=" gap-4 md:gap-0 flex-col md:flex-row   mx-4 flex justify-between items-center font-bold text-sky-700 md:py-6 pb-2 ">
        <div className="hidden    md:flex   text-sky-50 ">
          <button
            onClick={() => setShowMyModal(true)}
            className="    flex justify-center items-center shadow-lg rounded-lg text-center my-2   bg-gradient-to-r from-blue-700 to-sky-700 p-2 hover:bg-gradient-to-l hover:from-sky-800 hover:to-blue-600 duration-200"
          >
            <span>
              <TbPlus size={24} />
            </span>{" "}
            <span className="text-sm ">Add Transaction</span>
          </button>
        </div>
        <form className="md:w-1/2 w-full md:mx-auto rounded-lg shadow-lg flex items-center justify-between">
          <input
            className="p-2 outline-none rounded-tl-lg rounded-bl-lg basis-full"
            type="text"
            placeholder="Search Transactions..."
          />
          <button className="  bg-gradient-to-r from-blue-700 to-sky-600 p-2 text-sky-50 rounded-tr-lg rounded-br-lg">
            <TbSearch size={24} />
          </button>
        </form>
        <select
          className="font-semibold text-sky-50 outline-none self-start md:self-center rounded-lg bg-gradient-to-r from-blue-700 to-sky-700  p-2 hover:bg-gradient-to-l hover:from-sky-800 hover:to-blue-600 duration-200 "
          name=""
          id=""
        >
          <option className="text-sky-700" value="">
            {" "}
            Recent Transactions
          </option>
          <option className="text-sky-700" value="">
            {" "}
            Oldest Transactions
          </option>
          <option className="text-sky-700" value="">
            {" "}
            Price
          </option>
        </select>
      </div>
      {/* <h1 className="sm:text-sm md:text-xl font-bold text-sky-700 ">
        Your Transactions
      </h1> */}
    </div>
  );
};

export default SearchBar;
