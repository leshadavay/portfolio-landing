import Sidebar from "../components/Sidebar";

function App() {
  return (
    <div className="grid grid-cols-12 gap-6 px-14 md:px-32 lg:px-48 my-14">
      <div className="col-span-12 text-center bg-white lg:col-span-3 rounded-2xl">
        <Sidebar />
      </div>
      <div className="col-span-12 bg-white lg:col-span-9 rounded-2xl">
        <h1 className="text-3xl font-bold underline ">Hello world!</h1>
      </div>
    </div>
  );
}

export default App;
