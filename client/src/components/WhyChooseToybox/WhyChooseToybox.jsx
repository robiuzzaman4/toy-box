import { Typography } from "@material-tailwind/react";

const WhyChooseToybox = () => {

    const queryAns = [
        {
            id: 1,
            title: "Diverse Selection",
            description: "Our extensive collection covers a wide spectrum of interests, from educational toys that promote learning to action figures that spark adventures."
        },
        {
            id: 2,
            title: "Quality Assurance",
            description: "We prioritize safety and quality. All toys available on Toy Box undergo rigorous testing to meet the highest safety standards, ensuring a worry-free play experience."
        },
        {
            id: 3,
            title: "User-Friendly Interface",
            description: "Navigating through Toy Box is a breeze. Our intuitive website design makes it simple to search, browse, and find the perfect toy."
        }
    ];

    return (
        <section className="bg-[#f6f1f7] py-20">
            <div className="max-w-screen-lg mx-auto px-4 grid gap-8">
                <Typography variant="h4" className="font-bold">
                    Why Choose Toybox
                </Typography>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {
                        queryAns.map((ans) => (
                            <div key={ans.id}
                                data-aos="fade-up"
                                className="bg-white rounded-2xl p-4 shadow hover:shadow-md">
                                <div className="grid gap-4">
                                    <div className="text-white bg-purple-500 h-8 w-8 rounded-lg grid place-items-center shadow-md shadow-purple-100">
                                        {ans.id}
                                    </div>
                                    <h3 className="font-medium">{ans.title}</h3>
                                    <p className="text-sm text-gray-500">{ans.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default WhyChooseToybox;