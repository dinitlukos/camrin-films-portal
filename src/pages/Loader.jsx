import "./Loader.css";
import circle from "../assets/packages/cf_circle.png";

const Loader = () => {
  return (
    <div className="loader-container">
       <img src={circle} alt="Camrin Films Logo" className="spin-img" />
    </div>
  );
};

export default Loader;
