import "./App.css";
import Footer from "./components/footer/Index";
import Header from "./components/header/Index";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
     <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
    </>
  );
}

export default App;
