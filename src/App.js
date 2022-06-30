import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/Login/LoginPage";
import Register from "./components/Login/Register/Register";
import Search from "./components/Search/Search";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// Dla wszystkich komponentów tworzycie dedykowane foldery w folderze components

// 1. Article.js
// Element li
// w elemencie li:
// a w którym zawierać ma się tag img, span z przykładowym tekstem

// 2. Form.js

// Element form
// w form input type text i button type submit

// 3. HomePage.js
// h2 Today's hottest news:
// pusty ul

// 4. LoginForm.js
// Element form
// w formie ma być input type email, input type password, button type submit z textem Log in

// 5. Register.js
// Element form
// w formie ma być: h2 z tekstem Register new account, input type email, input type password x2, button submit z tekstem Register

// 6. LoginPage.js
// Wyrenderuj LoginForm.js
// h2 Don't have an account yet? Register now!
// button type button Register

// 7. Search
// render Form.js
// pusty ul

// const x = [1, 2, 3, 4, 5, 6];

// const y = [...x, ...z];

// console.log(y);
