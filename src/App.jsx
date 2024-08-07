import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="w-full h-svh flex flex-col">
          <Navbar />
          <div className="overflow-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
