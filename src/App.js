import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Detail from "./router/Detail";
import Home from "./router/Home";
import List from "./router/List";
import Nav from "./components/Nav"
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
    <RecoilRoot >
      <Router>
        <Nav />
        <Routes>
          <Route path="/page/:detail/:num" element={<List />} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
        </Routes>
      </Router>
    </RecoilRoot>
  )
}

export default App;