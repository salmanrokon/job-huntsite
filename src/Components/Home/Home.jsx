import CategoryList from "../CategoryList/CategoryList";
import FeaturedJob from "../../FeaturedJob/FeaturedJob";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Home;