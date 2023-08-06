import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useScroll from "../../hook/useScroll";
import { Button, Typography } from "@material-tailwind/react";
import useTitle from "../../hook/useTitle";
import { ChevronDoubleLeftIcon } from '@heroicons/react/24/solid';

const ToyDetails = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    useScroll(pathname);
    useTitle("Toy Details");

    const toy = useLoaderData();
    const { toyName, toyPhoto, toyRating, toyQuantity, toyPrice, subCategory, sellerName, sellerEmail, toyDetails } = toy;


    return (
        <section className="max-w-screen-md mx-auto px-4 py-20">
            <Button onClick={() => navigate("/")} size="sm" variant="outlined" color="purple" className="mb-4">
                <ChevronDoubleLeftIcon className="w-3 h-3 text-gray-900" />
            </Button>
            <div className="rounded-lg grid gap-8">
                <div className="h-64 w-full rounded-lg bg-gradient-to-b from-purple-50 to-purple-100 grid place-items-center group">
                    <img className="w-40 h-40 rounded-lg group-hover:scale-110 transition duration-500" src={toyPhoto} alt="toyPhoto" />
                </div>
                <Typography className="-mb-4" variant="h4" color="blue-gray"> {toyName} </Typography>
                <div className="grid sm:grid-cols-2 gap-4 py-4">
                    <div className="flex flex-col gap-3">
                        <Typography className="text-sm" color="purple"> <span className="font-semibold">Price:</span> ${toyPrice} </Typography>
                        <Typography className="capitalize text-sm"> <span className="font-semibold">Category:</span> {subCategory} </Typography>
                        <Typography className="text-sm" color="blue-gray"> <span className="font-semibold">Rating:</span> {toyRating.toFixed(1)} </Typography>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Typography className="text-sm" color="blue-gray"> <span className="font-semibold">Avaiable Quantity:</span> {toyQuantity} </Typography>
                        <Typography className="text-sm" color="blue-gray"> <span className="font-semibold">Saller Name:</span> {sellerName} </Typography>
                        <Typography className="text-sm" color="blue-gray"> <span className="font-semibold">Saller Email:</span> {sellerEmail} </Typography>
                    </div>
                    <Typography className="text-sm col-span-2" color="blue-gray"> <span className="font-semibold">Details:</span> {toyDetails} </Typography>
                </div>
            </div>
        </section>
    );
};

export default ToyDetails;