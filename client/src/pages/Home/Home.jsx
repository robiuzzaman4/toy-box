import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Hero from "../../components/Hero/Hero";
import Shop from "../../components/Shop/Shop";
import useTitle from "../../hook/useTitle";
import Gallery from "../../components/Gallery/Gallery";
import Review from "../../components/Review/Review";
import Faq from "../../components/Faq/Faq";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

const Home = () => {
    useTitle("Home");
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <LoadingSpinner/>
    }
    return (
        <>
            <Hero></Hero>
            <Gallery></Gallery>
            <Shop></Shop>
            <Review></Review>
            <Faq></Faq>
            <NewsLetter></NewsLetter>
        </>
    );
};

export default Home;