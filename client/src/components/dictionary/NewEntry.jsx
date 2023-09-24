const NewEntry = () => {
  return (
    <div className="w-[900px] h-[400px] flex bg-slate-400">
      <form action="" className="flex flex-col items-center justify-center">
        <input type="text" id="word" placeholder="Enter Word"/>
        <input type="text" id="definition" placeholder="Enter Definition"/>
        <input type="text" id="example" placeholder="Enter Example"/>
        <button type="submit">Create New Entry</button>
        {/* Select tag options */}
      </form>
    </div>
  );
};

export default NewEntry;
