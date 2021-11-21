import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Detail from "./router/Detail";
import Home from "./router/Home";
import Nav from "./components/Nav"

function App() {
  return <Router>
    <Nav />
    <Routes>
      <Route path="/movie/:id" element={<Detail />} />
      <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
    </Routes>
  </Router>
}

export default App;