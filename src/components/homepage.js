import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-img">
      <h1 className="title">Get your favorite pizza!</h1>

      <div className="button-div">
        <button id="order-pizz">
          <Link to="/pizza"> Pizza? </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
