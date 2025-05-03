import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TheForm from "./components/TheForm";
import Modal from "./components/modal/Modal";
import { AnimatePresence } from "framer-motion";


function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    analyzeSentiment(input); // <♡ The sentiment analysis function
    setLoading(true);

    if (input.trim() === "") {
      setShowWarning(true);
    } else {
      setModalOpen(true);
      setInput("");
      setShowWarning(false);
    }

  };

  const closeModal = () => {
    setInput("");
    setModalOpen(false);
  };

  /* <♡ API response /> */
  const analyzeSentiment = async (text) => {
    try {
      const response = await fetch("/analyze-sentiment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }), // <♡ Send user input as JSON
      });
      const data = await response.json(); // <♡ Parse the JSON response
      // <♡ Handle the sentiment response from the backend />
      setResponse(data.message);
    } catch (error) {
      console.error("Error:", error);
      setResponse("There was an error analyzing your sentiment.");
    } finally {
      setLoading(false); // <♡ Stop loading after the response
    }
  };

  return (
    <div className="app">
      <NavBar />
      <Header />
      <TheForm
        handleSubmit={handleSubmit}
        loading={loading}
        showWarning={showWarning}
        input={input}
        setInput={setInput}
      />
      <AnimatePresence>
      {response && isModalOpen && (
        <Modal onClose={closeModal} response={response} isOpen={isModalOpen} />
      )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}
export default App;
