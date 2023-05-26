import { Button, Card, Input, Textarea, Typography } from "@material-tailwind/react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../hook/useTitle";
import Swal from "sweetalert2";
import { ChevronDoubleLeftIcon } from '@heroicons/react/24/solid';
import useScroll from "../../hook/useScroll";

const UpdateMyToy = () => {
    const toy = useLoaderData();
    const { _id, toyQuantity, toyPrice, toyDetails } = toy;
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useScroll(pathname);
    useTitle("Update Toy");

    const handleUpdateToy = (e) => {
        e.preventDefault();

        const form = e.target;
        const toyPrice = form.toyPrice.value;
        const toyQuantity = form.toyQuantity.value;
        const toyDetails = form.toyDetails.value;

        const updatedToy = {
            toyPrice,
            toyQuantity,
            toyDetails,
        }

        fetch(`https://b7a11-toy-marketplace-server-side-robiuzzaman4.vercel.app/myToys/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedToy)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Done',
                        text: 'Successfully updated toy',
                    })
                }
            })
    }

    return (
        <section className="max-w-screen-xl mx-auto px-4 py-10">
            <div className="w-full max-w-screen-md mx-auto">

                <Button onClick={() => navigate(-1)} size="sm" variant="outlined" color="purple" className="mb-4">
                    <ChevronDoubleLeftIcon className="w-3 h-3 text-gray-900" />
                </Button>

                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" color="blue-gray">
                        Update this Toy
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Enter details to update a existing toy.
                    </Typography>
                    <form onSubmit={handleUpdateToy} className="mt-8 mb-2 w-full">
                        <div className="mb-4 grid lg:grid-cols-2 gap-4 w-full">
                            <Input type="number" name="toyPrice" color="purple" size="lg" label="Price" defaultValue={toyPrice} />
                            <Input type="number" name="toyQuantity" color="purple" size="lg" label="Available Quantity" defaultValue={toyQuantity} />
                        </div>
                        <div className="w-full h-auto">
                            <Textarea label="Details" color="purple" name="toyDetails" defaultValue={toyDetails} />
                        </div>
                        <div className="w-full mt-2">
                            <Button type="submit" color="purple" fullWidth>
                                Update Toy
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </section>
    );
};

export default UpdateMyToy;