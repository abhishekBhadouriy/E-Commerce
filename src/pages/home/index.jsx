import { useSelector } from "react-redux";
import { ProductsList, Navbar } from "../../components";
import "./style.css";

const Home = () => {
  
  return (
    <div className="Home">
      <Navbar />
      <ProductsList />
      
    </div>
  );
};

export { Home };
