import React from "react";
import Header from "../layouts/Header";
import { useNowPlayingMovies } from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
    </div>
  );
};

export default Browse;
