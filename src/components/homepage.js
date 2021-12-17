import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-img">
      <h1 className="title">Get your favorite pizza!</h1>

      <div className="button-div">
        <button id="order-pizza">
          <Link to="/pizza/confirm"> Pizza? </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
