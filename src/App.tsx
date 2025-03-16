import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MoviesList from "./components/MoviesList";

function App() {
  return (
    <div>
      <h1>📽️ Moja Filmska Aplikacija</h1>
      <MoviesList />
    </div>
  );
}

export default App;
