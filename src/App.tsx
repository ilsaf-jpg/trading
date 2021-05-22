import React from "react"
import "./App.css"
import { ChartsPage } from "./components/Charts/ChartsPage"
import "bootstrap/dist/css/bootstrap.min.css"
import TradingViewWidget from "react-tradingview-widget"

function App() {
  return (
    <div>
      <TradingViewWidget symbol="NASDAQ:AAPL" />
      {/* <ChartsPage /> */}
    </div>
  )
}

export default App
