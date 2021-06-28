import React from "react"
import "./App.css"
import { Top } from "./components/Top/Top"
import { Profile } from "./components/Profile.tsx/Profile"
import { Info } from "./components/Info/Info"
import { MainPage } from "./components/MainPage/MainPage"
import { BrowserRouter, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Top />
        <div>
          <Route path="/main" component={MainPage} />
          <Route path="/profile" component={Profile} />
          <Route path="/info" component={Info} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
