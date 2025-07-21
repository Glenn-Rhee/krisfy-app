import { Router, Route } from "wouter"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import { useWalletEvent } from "./services/useWalletEvent";

const App = () => {
  useWalletEvent();
  return (
    <Router>
      <Navbar />
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  )
}

export default App;
