import React from "react";
import { TbPlus } from "react-icons/tb";
import { MdClose } from "react-icons/md";
const TransactionForm = ({ onClose }) => {
  return (
    <div className="rounded-lg shadow-lg p-4 bg-white flex flex-col ">
      <div className="flex  justify-between  p-4 items-center ">
        <h3 className="font-bold text-lg">Create New Transaction</h3>
        <button onClick={onClose} className="text-sky-700">
          <MdClose size={32} />
        </button>
      </div>
      <form className="p-4">
        <div className="grid gap-4 grid-cols-2">
          <div className="col-span-2">
            <label className="block mb-2 font-semibold" htmlFor="">
              Name
            </label>
            <input
              placeholder="Type Transaction Name"
              className=" text-sm w-full p-2 bg-gray-50 border-2 placeholder-gray-400 focus:ring-primary-600 focus:border-primary-600 border-gray-300     rounded-lg "
              type="text"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block mb-2 font-semibold " htmlFor="amount">
              Amount Spent
            </label>
            <input
              placeholder="$ 20"
              className=" text-sm p-2 w-full bg-gray-50 border-2 placeholder-gray-400 focus:ring-primary-600 focus:border-primary-600 border-gray-300     rounded-lg "
              type="number"
            />
          </div>
          <div className="col-span-2 sm:col-span-1 ">
            <label className="block mb-2 font-semibold" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              className="text-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  placeholder-gray-400 "
            >
              <option className="rounded-lg font-semibold " selected="">
                Select category
              </option>
              <option
                className="rounded-lg font-semibold text-sky-700"
                value="entertainment"
              >
                Entertainment
              </option>
              <option
                className="rounded-lg font-semibold text-sky-700"
                value="food"
              >
                Food{" "}
              </option>
              <option
                className="rounded-lg font-semibold text-sky-700"
                value="accessories"
              >
                Accessories
              </option>
              <option
                className="rounded-lg font-semibold text-sky-700"
                value="shopping"
              >
                Shopping
              </option>
              <option
                className="rounded-lg font-semibold text-sky-700"
                value="Custom"
              >
                Custom
              </option>
            </select>
          </div>

          <div className="col-span-2">
            <label className="block mb-2 font-semibold" htmlFor="description">
              Description
            </label>
            <textarea
              row="4"
              cols="50"
              placeholder="Write Transaction Description Here"
              className=" text-sm w-full p-2 bg-gray-50 border-2 placeholder-gray-400 focus:ring-primary-600 focus:border-primary-600 border-gray-300     rounded-lg "
            ></textarea>
          </div>
          <button className="col-span-2 w-3/5 md:w-1/4 p-2 bg-gradient-to-r from-blue-800 to-sky-600 rounded-lg shadow-lg text-sky-50  ">
            <div className="flex gap-2 items-center">
              <span>
                <TbPlus size={20} />{" "}
              </span>
              <span>Add Transaction</span>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
