import { Link } from "react-router-dom";

import "../App.css";
import HomeList from "../components/HomeList";
import NavTitle from "../components/NavTitle";

const HomePage = () => {
  return (
    <>
      <NavTitle title={"Titles"} />
      <main className="flex gap-6 max-w-7xl m-auto my-8">
        <Link to="/series">
          <HomeList type={"series"} text={"Popular series"} />
        </Link>
        <Link to="/peliculas">
          <HomeList type={"movies"} text={"Popular movies"} />
        </Link>
      </main>
    </>
  );
};

export default HomePage;
