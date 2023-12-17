import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import TransactionForm from "./TransactionForm";
import TransactionHistory from "./TransactionHistory";
import Footer from "./Footer";
import MyModal from "./MyModal";
import { TbPlus } from "react-icons/tb";
const App = () => {
  const [showMyModal, setShowMyModal] = useState(false);

  function handleOnClose() {
    setShowMyModal(false);
  }
  return (
    <div className="flex relative bg-gray-200/50 justify-between flex-col h-screen">
      <div>
        <div className="bg-gray-200 fixed top-0 z-10 w-full">
          <Header />
          <SearchBar />
        </div>

        <TransactionHistory />
        <Footer />
      </div>

      <div className=" bg-blue-50  sticky bottom-0 flex justify-center items-center m-2 text-sky-50 ">
        <button
          onClick={() => setShowMyModal(true)}
          className="w-10 h-10 mx-auto shadow-lg rounded-full text-center my-2   bg-gradient-to-r from-blue-800 to-sky-700 p-2"
        >
          <TbPlus size={24} />
        </button>
      </div>
      <MyModal onCloseModal={handleOnClose} visible={showMyModal} />
    </div>
  );
};

export default App;
