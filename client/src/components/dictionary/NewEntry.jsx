import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const NewEntry = () => {
  const navigate = useNavigate();

  const [entryData, setEntryData] = useState({
    word: "",
    definition: "",
    example: "",
  });

  const handleChange = (e) => {
    setEntryData({
      ...entryData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { word, definition, example } = entryData;

    try {
      const response = await axios.post("/NewEntry", {
        word,
        definition,
        example,
      });

      if (response.data.error) {
        toast.error(response.data.error); // Display the error message as a toast
      } else {
        setEntryData({
          word: "",
          definition: "",
          example: "",
        });

        navigate("/Dictionary");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later."); // Display a generic error message as a toast
    }
  };

  return (
    <div className="w-[900px] h-[400px] flex bg-slate-400">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center">
        <input
          type="text"
          name="word"
          id="word"
          placeholder="Enter Word"
          onChange={handleChange}
          value={entryData.word}
        />
        <input
          type="text"
          name="definition"
          id="definition"
          placeholder="Enter Definition"
          onChange={handleChange}
          value={entryData.definition}
        />
        <input
          type="text"
          name="example"
          id="example"
          placeholder="Enter Example"
          onChange={handleChange}
          value={entryData.example}
        />

        {/* Select tag options */}

        <button type="submit">Create New Entry</button>
      </form>
    </div>
  );
};

export default NewEntry;
