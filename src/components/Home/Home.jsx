import NavBar from "../Header/NavBar";
import Filter from "../Filter/Filter";
import List from "../List/List";
import "./Home.css";
import Footer from "../../Footer/Footer";

const Home = () => {
    
    return(
        <div className="home-wrapper">
            <NavBar />
            <div className="home-container">
                <Filter />
                <List />
            </div>
            <Footer />
        </div>
    )
}
export default Home;