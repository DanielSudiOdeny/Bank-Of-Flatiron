import React, { useEffect, useState } from "react";

const TransactionsTable = ({ transactions }) => {
  //   const data = {
  //     id: 1,
  //     transactionName: "Reinsurance Group of America, Incorporated",
  //     description: "Adventure|Sci-Fi",
  //     amountSpent: "$5.29",
  //     category: "Female",
  //     dateTime: "2/15/2023",
  //   };

  return (
    <div className=" hidden md:block">
      <table className=" table-auto w-full border-2  rounded-xl shadow-xl">
        <thead className="text-left text-xs font-semibold uppercase bg-gray-50 text-gray-400">
          <tr className="   rounded-xl  border-b-2 border-gray-300 m-2">
            <th className="p-3 whitespace-nowrap">Category</th>
            <th className="p-3 whitespace-nowrap">Description</th>
            <th className="p-3 whitespace-nowrap">Amount Spent</th>

            <th className="p-3 whitespace-nowrap">Date</th>
            <th className="p-3 whitespace-nowrap">Actions</th>
          </tr>
        </thead>
        <tbody className=" text-sm divide-y-2 divide-gray-100">
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="text-sky-700 font-semibold">
              <td className="p-3 whitespace-nowrap">{transaction.category}</td>
              <td className="p-3 whitespace-nowrap">
                {transaction.description}
              </td>
              <td className="p-3 whitespace-nowrap ">$ {transaction.amount}</td>
              <td className="p-3 whitespace-nowrap">{transaction.date}</td>
              <td className="p-3 whitespace-nowrap">Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
