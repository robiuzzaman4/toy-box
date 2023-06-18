import { Typography, Tabs, TabsHeader, Tab, TabsBody } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import TabCard from "../TabCard/TabCard";

const Shop = () => {
    const [categories, setCategories] = useState([]);
    const [selectedTab, setSelectedTab] = useState("science");
    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    useEffect(() => {
        fetch(`https://b7a11-toy-marketplace-server-side-robiuzzaman4.vercel.app/toys?subCategory=${selectedTab}`)
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
            })
    }, [selectedTab]);

    const tabs = ['science', 'math', 'engineering'];
    return (
        <section className="max-w-screen-md mx-auto  py-20">
            <Typography variant="h4" className="font-bold px-4">Shop by catagory:</Typography>

            <div className="py-6">
                <Tabs value="science">
                    <TabsHeader className="max-w-sm mx-4">
                        {tabs.map((tab) => (
                            <Tab onClick={() => handleTabChange(tab)} key={tab} value={tab} className="capitalize">
                                {tab}
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody className="mt-10 min-h-[300px] grid md:grid-cols-2  w-full">
                        {
                            categories.map((category) => <TabCard
                            key={category._id}
                            category={category}></TabCard>)
                        }  
                    </TabsBody>
                </Tabs>
            </div>
        </section>
    );
};

export default Shop;