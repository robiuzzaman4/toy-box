import { Typography } from "@material-tailwind/react";
import { CheckBadgeIcon, CurrencyDollarIcon, GiftTopIcon } from '@heroicons/react/24/solid'

const Features = () => {
    const features = [
        {
            id: 1,
            icon: <CheckBadgeIcon className="w-5 h-5" />,
            title: "Original Produducts",
            description: "We probide money back guarantee, if the product are not original."
        },
        {
            id: 2,
            icon: <CurrencyDollarIcon className="w-5 h-5" />,
            title: "Satisfaction Guarantee",
            description: "Exchange the product you've the purchased, if it doesn't fit on you."
        },
        {
            id: 3,
            icon: <GiftTopIcon className="w-5 h-5" />,
            title: "New Arrival Every Week",
            description: "We update our collection almost everyday. So you can find new items every week."
        }
    ]
    return (
        <section className="bg-[#f6f1f7]">
            <div className="max-w-screen-md mx-auto grid gap-8 px-4 py-20">
                <Typography variant="h4" className="font-bold">We provide best <br /> customar experience:</Typography>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {
                        features.map((feature) => (
                            <div key={feature.id}
                                data-aos="fade-up"
                                className="bg-white rounded-tr-3xl rounded-bl-3xl p-4 shadow hover:shadow-md">
                                <div className="grid gap-4">
                                    <div className="text-white bg-purple-500 h-8 w-8 rounded-lg grid place-items-center shadow-md shadow-purple-100">
                                        {feature.icon}
                                    </div>
                                    <h3 className="font-medium">{feature.title}</h3>
                                    <p className="text-sm text-gray-500">{feature.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Features;