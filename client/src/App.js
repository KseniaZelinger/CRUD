import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Main from "./components/Main";
import Question from "./components/Questions";
import SaveQuestions from "./components/SaveQuestions";

function App() {
  return (
    <div className="App">
      <h1>Подготовка к собеседованиям</h1>
      <Router>
        <div>
          <nav>
            <ul className='navbar'>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/Questions">Вопросы</Link>
              </li>
              <li>
                <Link to="/SaveQuestions">Добавить вопрос</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Questions" element={<Question />} />
            <Route path="/SaveQuestions" element={<SaveQuestions />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
