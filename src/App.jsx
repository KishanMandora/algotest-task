import "./App.css";
import { Navbar, Sidebar } from "./Components";

function App() {
  return (
    <div className="h-screen font-ubuntu">
      <Navbar />
      <section className="grid min-h-screen w-full grid-cols-4 semi-lg:grid-cols-5">
        <Sidebar />
        <div className="col-span-4 mt-16 p-4"></div>
      </section>
    </div>
  );
}

export default App;
