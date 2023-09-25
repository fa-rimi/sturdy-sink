import { useState, useEffect } from "react";
import axios from "axios";
import DictionaryNav from "../components/navbars/DictionaryNav";
import { BsPlusLg } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import NewEntry from "../components/dictionary/NewEntry"; // Import your NewEntry component

const DictionaryPg = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [words, setWords] = useState([]);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await axios.get("/AllWords"); // Adjust the API endpoint as needed
        console.log(response.data); // Log the response data to the console
        setWords(response.data);
      } catch (error) {
        console.error("Error fetching words:", error);
      }
    };

    fetchWords();
  }, []);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <nav>
        <DictionaryNav />
      </nav>

      {/* When user clicks on +, open the pop-up */}
      <button onClick={openPopup}>
        <BsPlusLg size={30} />
      </button>

      {/* Conditionally render the NewEntry component as a pop-up */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-600 opacity-70"></div>
          <div className="relative bg-white rounded-lg shadow-lg p-4 w-96">
            <button
              onClick={closePopup}
              className="absolute top-0 right-0 m-2 text-gray-600 hover:text-red-500">
              <GrClose size={25} />
            </button>
            <NewEntry />
          </div>
        </div>
      )}

      {/* Display the words */}
      <div>
        <h2>Dictionary Words</h2>
        <table>
          <thead>
            <tr>
              <th>Word</th>
              <th>Definition</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            {words.map((word) => (
              <tr key={word._id}>
                <td>{word.word}</td>
                <td>{word.definition}</td>
                <td>{word.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DictionaryPg;
