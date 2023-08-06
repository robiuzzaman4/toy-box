import { Button, Card, Input, Radio, Textarea, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hook/useTitle";

const AddAToy = () => {
    useTitle("Add a Toy");
    const { user } = useContext(AuthContext);
    const [selectedCategory, setSelectedCategory] = useState("science");

    const handleSubCategory = (e) => {
        setSelectedCategory(e.target.id);
    };

    const handleAddToy = (e) => {
        e.preventDefault();
        const form = e.target;
        const toyName = form.toyName.value;
        const toyPrice = form.toyPrice.value;
        const toyRating = form.toyRating.value;
        const toyQuantity = form.toyQuantity.value;
        const toyDetails = form.toyDetails.value;
        const toyPhoto = form.toyPhoto.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;

        const newToy = {
            toyName,
            toyPrice,
            toyRating,
            toyQuantity,
            toyDetails,
            toyPhoto,
            sellerName,
            sellerEmail,
            subCategory: selectedCategory
        }

        fetch(`https://b7a11-toy-marketplace-server-side-robiuzzaman4.vercel.app/toys`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newToy)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Done',
                        text: 'Successfully added a new toy',
                    })
                    form.reset();
                }
            })
    }

    return (
        <section className="max-w-screen-xl mx-auto px-4 py-10">
            <div className="w-full max-w-screen-lg mx-auto">
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" color="blue-gray">
                        Add a Toy
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Enter details to create a new toy.
                    </Typography>
                    <form onSubmit={handleAddToy} className="mt-8 mb-2 w-full">
                        <div className="mb-12 grid lg:grid-cols-2 gap-6 w-full">
                            <div className="grid gap-6">
                                <Input type="text" name="toyName" color="purple" size="lg" label="Name" required />
                                <Input type="text" name="sellerName" color="purple" size="lg" label="Seller Name" defaultValue={user?.displayName} required />
                                <Input type="email" name="sellerEmail" color="purple" size="lg" label="Seller Email" defaultValue={user?.email} readOnly required />
                                <div className="flex flex-col gap-2">
                                    <Typography className="text-sm text-blue-gray-500">Sub Category</Typography>
                                    <div className="flex items-center gap-1 text-sm">
                                        <Radio id="science" name="radio" color="purple" label="Science" checked={selectedCategory === "science"} onChange={handleSubCategory} />
                                        <Radio id="math" name="radio" color="purple" label="Math" checked={selectedCategory === "math"} onChange={handleSubCategory} />
                                        <Radio id="engineering" name="radio" color="purple" label="Engineering" checked={selectedCategory === "engineering"} onChange={handleSubCategory} />
                                    </div>
                                </div>
                            </div>
                            <div className="grid gap-6">
                                <Input type="number" name="toyPrice" color="purple" size="lg" label="Price" required />
                                <Input type="number" name="toyRating" color="purple" size="lg" label="Rating" required step="any" />
                                <Input type="number" name="toyQuantity" color="purple" size="lg" label="Available Quantity" required />
                                <div className="w-full h-[72px]">
                                    <Textarea label="Details" color="purple" name="toyDetails" required />
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <Input type="text" name="toyPhoto" color="purple" size="lg" label="Photo URL" required />
                            <Button type="submit" color="purple" className="mt-6" fullWidth>
                                Add Toy
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </section>
    );
};

export default AddAToy;