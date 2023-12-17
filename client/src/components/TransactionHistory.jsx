import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import TransactionsTable from "./TransactionsTable";
const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5555/transactions");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error as needed (e.g., show an error message to the user)
      } finally {
        setLoading(false); // Set loading to false whether the fetch was successful or not
      }
    };

    const abortController = new AbortController();

    fetchData();

    return () => {
      // Cleanup function to abort fetch when component unmounts
      abortController.abort();
    };
  }, []);
  return (
    <div className="mx-4 mt-48">
      <TransactionsTable transactions={transactions} />
      <div className="grid grid-cols-1 gap-4 md:hidden  overflow-scroll">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className=" flex gap-2 flex-col bg-white p-4 shadow-lg"
          >
            <div className="flex  justify-between items-center">
              <div className="font-bold bg-sky-100  p-2 rounded-lg text-sky-700">
                {transaction.category}
              </div>
              <span className="text-xl text-sky-700">
                <MdClose />
              </span>
            </div>

            <div className="text-sm">{transaction.description}</div>
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold text-sky-700">
                $ {transaction.amount}
              </div>
              <div className="font-semibold text-gray-400">
                {transaction.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
