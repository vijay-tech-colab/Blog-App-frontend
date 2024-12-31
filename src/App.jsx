
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './componants/navbar/Navbar';
import LandingPage from './componants/pages/Home/Home';
import BlogList from './componants/pages/Blogs/Blogs'
import Login from './componants/auth/Login';
import SignUp from './componants/auth/SignUp';
import ContactUs from './componants/pages/Conatact/ContactUs';
import About from './componants/pages/About/About';
import BlogDetails from './componants/pages/Blogs/blogDetails';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import blogs from './data';
import Footer from './componants/footer/Footer';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/all-blog" element={<BlogList blogs={blogs}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/blogs/:id" element={<BlogDetails blogs={blogs}/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
