import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/NotFound";
import EditTask from "./pages/EditTask";
import NewTask from "./pages/NewTask";
import MyTask from "./pages/MyTask";
import CoverPage from "./pages/CoverPage";
import Navbar from "./component/Navbar";

function App() {
  return <>
  <BrowserRouter>
  <Navbar/>
  <main>
    <Routes>
      <Route path="/" element={<CoverPage/>} />
      <Route path="/new-task" element={<NewTask />} />
      <Route path="/task" element={<MyTask/>} />
      <Route path="/edit-task" element={<EditTask />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
  </BrowserRouter>
  </>;
}

export default App;
