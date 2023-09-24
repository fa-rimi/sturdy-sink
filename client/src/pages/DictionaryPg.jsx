import { useState } from "react";
import DictionaryNav from "../components/navbars/DictionaryNav";
import { BsPlusLg } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import NewEntry from "../components/dictionary/NewEntry"; // Import your NewEntry component

const DictionaryPg = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
        <div className="popup">
          <div className="popup-content">
            <button onClick={closePopup}><GrClose size={25}/></button>
            <NewEntry />
          </div>
        </div>
      )}
    </div>
  );
};

export default DictionaryPg;
