import Feedback from "../askedQus/Feedback";
import Banner from "../banner/Banner";
import DrawerState from "../drawerstate/DrawerState";
import Gallery from "../gallery/Gallery";
import AllTabs from "../tab/AllTabs";
import UseTitle from "../title/UseTitle";

const Home = () => {
    UseTitle('R-T|Home')
    return (
        <div>
           <Banner></Banner>
           <Gallery></Gallery>
            <AllTabs></AllTabs>
            <DrawerState></DrawerState>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;