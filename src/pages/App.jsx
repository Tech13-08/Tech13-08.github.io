import { Terminal } from "../components/Terminal";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";

const App = () => {
  return (
    <main className="bg-[#1b141c]">
      <Header />
      <div className="flex flex-row justify-start">
        <NavBar />
        <Terminal />
      </div>
    </main>
  );
};

export default App;
