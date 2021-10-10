import React from "react";
import { Header } from "./components/Header";
import "./App.css";
import { Balance } from "./components/Balance";
import { IncomeExp } from "./components/IncomeExp";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <a
        href="https://github.com/ShubhamChavhan09/expense-tracker"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExp />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
