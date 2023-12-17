import React from "react";
import TransactionForm from "./TransactionForm";
const MyModal = ({ onCloseModal, visible }) => {
  if (!visible) return null;
  return (
    <div className="z-10 fixed inset-0 bg-opacity-30 bg-black backdrop-blur-sm flex justify-center items-center ">
      <div className=" md:w-1/2 w-11/12 rounded-lg">
        <TransactionForm onClose={onCloseModal} />
      </div>
    </div>
  );
};

export default MyModal;
