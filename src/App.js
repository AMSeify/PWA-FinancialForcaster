import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css"
import { BrowserRouter, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import MainPage from "./pages/MainPage"
import StatePage from "./pages/StatePage"
import UserPage from "./pages/UserPage"
import BuyPage from "./pages/BuyPage"
import SellPage from "./pages/SellPage"

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/sell" component={SellPage} />
        <Route path="/stats" component={StatePage} />
        <Route path="/user" component={UserPage} />
        <Route path="/buy" component={BuyPage} />
        <Route path="/my" component={MainPage} />
        <Route path="/" component={LoginPage} exact />
      </BrowserRouter>
    </div>
  )
}

export default App
