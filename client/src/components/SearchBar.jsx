import React from "react";
import { TbSearch } from "react-icons/tb";

const SearchBar = () => {
  return (
    <div>
      <form className="my-4 mx-2 rounded-lg shadow-lg flex items-center justify-between">
        <input
          className="p-2 outline-none rounded-tl-lg rounded-bl-lg basis-full"
          type="text"
          placeholder="Search Transactions..."
        />
        <button className=" block bg-gradient-to-r from-blue-700 to-sky-600 p-2 text-sky-50 rounded-tr-lg rounded-br-lg">
          <TbSearch size={24} />
        </button>
      </form>
      <div className="  mx-2 flex justify-between items-center font-bold text-sky-700 py-4">
        <h1 className="sm:text-sm md:text-xl font-bold ">Your Transactions</h1>
        <select className="p-2 rounded-lg text-sm " name="" id="">
          <option value=""> Recent Transactions</option>
          <option value=""> Recent Transactions</option>
          <option value=""> Recent Transactions</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
