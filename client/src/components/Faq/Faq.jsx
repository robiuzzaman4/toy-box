import { Accordion, AccordionBody, AccordionHeader, Typography } from "@material-tailwind/react";
import { useState } from "react";

const Faq = () => {
    const [open, setOpen] = useState(0);
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    const customAnimation = {
        mount: { scale: 1 },
        unmount: { scale: 0.9 },
    };

    function Icon({ id, open }) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${id === open ? "rotate-180" : ""
                    } h-4 w-4 transition-transform`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        );
    }
    return (
        <section className="max-w-screen-md mx-auto px-4 py-20 grid gap-10">
            <Typography variant="h4" className="font-bold">Frequently asked questions:</Typography>
            <div>
                <Accordion animate={customAnimation} open={open === 1} icon={<Icon id={1} open={open} />}>
                    <AccordionHeader className="text-base font-medium text-gray-800" onClick={() => handleOpen(1)}>
                        What payment methods are accepted on ToyBox?
                    </AccordionHeader>
                    <AccordionBody>
                        ToyBox accepts a variety of payment methods, including major credit cards such as Visa, Mastercard, and American Express. Additionally, they also accept payments through popular online platforms such as PayPal, Apple Pay, and Google Pay for convenient and secure transactions.
                    </AccordionBody>
                </Accordion>
                <Accordion  animate={customAnimation} open={open === 2} icon={<Icon id={2} open={open} />}>
                    <AccordionHeader className="text-base font-medium text-gray-800" onClick={() => handleOpen(2)}>
                        What is ToyBox&apos;s return policy?
                    </AccordionHeader>
                    <AccordionBody>
                        ToyBox has a customer-friendly return policy. If you are not satisfied with your purchase, you can return the item within a specified timeframe (usually within 30 days of delivery) for a refund or exchange. It&apos;s important to review the specific return guidelines on their website, including any requirements for product condition and packaging.
                    </AccordionBody>
                </Accordion>
                <Accordion animate={customAnimation} open={open === 3} icon={<Icon id={3} open={open} />}>
                    <AccordionHeader className="text-base font-medium text-gray-800" onClick={() => handleOpen(3)}>
                        Does ToyBox offer international shipping?
                    </AccordionHeader>
                    <AccordionBody>
                        Yes, ToyBox offers international shipping to many countries. However, it&apos;s advisable to check their shipping information or contact their customer support to verify if they deliver to your specific location. Shipping fees and delivery times may vary depending on the destination, so it&apos;s recommended to review the details provided by ToyBox during the checkout process.
                    </AccordionBody>
                </Accordion>
            </div>
        </section>
    );
};

export default Faq;