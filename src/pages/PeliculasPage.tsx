import axios from "axios";
import { useEffect, useState } from "react";
import ImageCard from "../components/ImageCard";
import NavTitle from "../components/NavTitle";

const PeliculasPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      await axios
        .get(
          "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed//sample.json"
        )
        .then(({ data }) => {
          const moviesfiltered = data.entries;
          const response = moviesfiltered
            .sort((a: any, b: any) => a.title > b.title)
            .filter(
              (movies: any) =>
                movies.programType === "movie" && movies.releaseYear >= 2010
            );

          setMovies(response);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    loadMovies();
  }, []);

  return (
    <>
      <NavTitle title={"Movies"} />
      <main className="m-auto max-w-7xl ">
        <div className="grid grid-cols-5 gap-4 my-10">
          {movies ? (
            movies
              .map((resp: any, index: number) => (
                <ImageCard key={index} data={resp} />
              ))
              .slice(0, 20)
          ) : (
            <div>"loading..."</div>
          )}
        </div>
      </main>
    </>
  );
};

export default PeliculasPage;
