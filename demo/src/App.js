// App.js
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import { Home } from "./routes/Home"
import { About } from "./routes/About"; // 追加
import { Contact } from "./routes/Contact";  // 追加
import './index.css';

function App () {
  return (
    <html lang="ja">
      <body className="hoge">
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={ <About /> } /> {/*追加*/}
            <Route path="/contact" element={ <Contact /> } /> {/*追加*/}
          </Routes>
        </div>
      </body>
    </html>
  );
}

export default App;
