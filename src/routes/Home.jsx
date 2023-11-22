import Hero from "../components/Hero/Hero.jsx";
import Explore from "../components/Explore/Explore";
import TimeLine from "../components/TimeLine/Timeline.jsx";
import FormDb from "../components/FormDb/FormDb.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Navbar/Navbar.modules.css";

const Home = () => {
    return (
        <div>
            <Hero />
            <Explore />
            <TimeLine />
            <FormDb />
        </div>
    );
};

export default Home;
