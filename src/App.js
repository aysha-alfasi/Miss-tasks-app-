import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TheForm from "./components/TheForm";
import Modal from "./components/modal/Modal";

function App() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [response, setResponse] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /* <♡ I will work on this later /> */
  };

  const closeModal = () => {
    setInput("");
    setModalOpen(false);
  };

  return (
    <>
      <NavBar />
      <Header />
      <TheForm
        handleSubmit={handleSubmit}
        loading={loading}
        showWarning={showWarning}
        input={input}
        setInput={setInput}
      />
      {response && isModalOpen && (
        <Modal onClose={closeModal} response={response} />
      )}
      <Footer />
    </>
  );
}
export default App;
