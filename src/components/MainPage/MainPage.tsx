import React from "react"
import TradingViewWidget from "react-tradingview-widget"
import s from "./MainPage.module.css"
export const MainPage: React.FC = () => {
  return (
    <div className="">
      <TradingViewWidget symbol="NASDAQ:AAPL" />
    </div>
  )
}
