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
import Features from "../../components/Features/Features";
import Stats from "../../components/Stats/Stats";
import WhyChooseToybox from "../../components/WhyChooseToybox/WhyChooseToybox";

const Home = () => {
    useTitle("Home");
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <LoadingSpinner/>
    }
    return (
        <>
            <Hero></Hero>
            <Stats></Stats>
            <WhyChooseToybox></WhyChooseToybox>
            <Gallery></Gallery>
            <Features></Features>
            <Shop></Shop>
            <Review></Review>
            <Faq></Faq>
            <NewsLetter></NewsLetter>
        </>
    );
};

export default Home;