import React from "react"
import "./App.css"
import { ChartsPage } from "./components/Charts/ChartsPage"
import TradingViewWidget from "react-tradingview-widget"
function App() {
  return (
    <div>
      <ChartsPage />
      <TradingViewWidget symbol="NASDAQ:AAPL" />
    </div>
  )
}

export default App
