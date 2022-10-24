import "./App.css";
import { LegBuilder, LegContainer, Navbar, Sidebar } from "./Components";

function App() {
  return (
    <div className="h-screen bg-background-color font-ubuntu">
      <Navbar />
      <section className="grid min-h-screen w-full grid-cols-4 semi-lg:grid-cols-5">
        <Sidebar />
        <LegContainer />
      </section>
    </div>
  );
}

export default App;
