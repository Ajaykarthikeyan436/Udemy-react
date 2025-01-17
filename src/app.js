import "./style.css"
import Navbar from './components/navbar';
import Catagories from './components/catagories';
import Banner from './components/banner';
import Recommend from './components/recommend';
import Topics from "./components/topics";
import Popular from "./components/popular";
import Footer from "./components/footer";

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Catagories></Catagories>
            <Banner></Banner>
            <Recommend></Recommend>
            <Topics></Topics>
            <Popular></Popular>
            <Footer></Footer>
        </div>
    )
}

export default App