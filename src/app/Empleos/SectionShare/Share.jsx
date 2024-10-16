const Share = () => {
  return (
    <div className="flex justify-center   ">
      <div className="flex flex-col h-5/6 gap-4 w-60 shadow-md border-2 p-2 rounded-md bg-white">
        <header className=" flex items-center h-20 text-2xl">
          <h1>Buscar</h1>
        </header>

        <main className="flex flex-col items-center gap-6 h-full ">
          <input type="text" className="bg-slate-200  w-5/6 h-11" />
          <input type="text" className="bg-slate-200 w-5/6 h-11" />
        </main>
      </div>
    </div>
  );
};

export default Share;
