import React from "react";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header/>
      <TaskList />
    </>
  );
}

export default App;
