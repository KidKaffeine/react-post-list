import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Modal from "./components/Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Header isModalOpen={setOpenModal} />
      {openModal && <Modal isModalOpen={setOpenModal} />}
    </>
  );
}

export default App;
