import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AllBlogs from "./pages/AllBlogs";
import BlogInfo from "./pages/BlogInfo";
import Login from "./user/Login";
import DashBoard from "./user/DashBoard";
import Signup from "./user/Signup";
import CreateBlog from "./user/CreateBlog";
import Nopage from "./pages/Nopage";
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast";
import Nav from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <MyState>
        <Router>
          <Nav/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/allblogs" element={<AllBlogs/>}/>
              <Route path="/bloginfo/:id" element={<BlogInfo/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/dashboard" element={<DashBoard/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/createblog" element={<CreateBlog/>}/>
              <Route path="/*" element={<Nopage/>}/>
            </Routes>
          <Footer/>
          <Toaster/>
        </Router>
    </MyState>
  )
}

export default App