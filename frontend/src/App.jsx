import {Routes, Route} from "react-router"
import HomePage from "./pages/HomePage.jsx"
import CreatePage from "./pages/CreatePage.jsx"
import NotesDetail from "./pages/NotesDetail.jsx"
// import toast from "react-hot-toast"

function App() {


  return (
    <div data-theme="forest">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/notes/:id" element={<NotesDetail />} />
      </Routes>
    </div>
  )
}

export default App
