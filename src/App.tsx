import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MoviesList from "./components/MoviesList";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>📽️ Moja Filmska Aplikacija</h1>
        <MoviesList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
