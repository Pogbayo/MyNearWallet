import CoinPage from "./coin/Coin";
import Formdata from "./form/FormData";
import Card from "./home/card/Card";
import { Footer } from "./home/footer/Footer";
import { Homepage } from "./home/HomePage/Homepage";
import { Join } from "./home/join/Join";
import { Nav } from "./home/navbar/Nav";
import { Tools } from "./home/Tools/Tools";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Import } from "./import/Import";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Homepage />
                <Card />
                <Tools />
                <Join />
                <Footer />
              </>
            }
          />
          <Route path="/coin" element={<CoinPage />} />
          <Route path="/form" element={<Formdata />} />
          <Route path="/import" element={<Import />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
