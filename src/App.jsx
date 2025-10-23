
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Customers from "./pages/Customers";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Sales from "./pages/Sales";
import Users from "./pages/Users";

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/items" element={<Items />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
