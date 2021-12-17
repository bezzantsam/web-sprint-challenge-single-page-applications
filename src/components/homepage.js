import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-img">
      <h1 className="title">Come party with us!</h1>

      <div className="button-div">
        <button id="order-pizz">
          <Link to="/pizza"> PIZZA? </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
