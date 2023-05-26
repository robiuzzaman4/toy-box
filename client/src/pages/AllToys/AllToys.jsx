import { useLoaderData } from "react-router-dom";
import useTitle from "../../hook/useTitle";
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import AllToysTableRow from "./AllToysTableRow";
import { useState } from "react";

const AllToys = () => {
    useTitle("All Toys");
    const allToys = useLoaderData();
    const [toys, setToys] = useState(allToys);

    const tableHead = ["Img", "Toy Name", "Seller Name", "Sub Category", "Price", "Quantity", "Action"];

    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

        fetch(`https://b7a11-toy-marketplace-server-side-robiuzzaman4.vercel.app/toys/search?toyName=${search}`)
            .then((res) => res.json())
            .then((data) => setToys(data))
    }

    return (
        <section className="max-w-screen-xl mx-auto px-4 py-10 grid gap-10">
            <Typography variant="h3" className="text-center">All Toys</Typography>
            <div className="relative flex w-full mx-auto max-w-[24rem]">
                <form onSubmit={handleSearch} className="w-full">
                    <Input
                        type="text"
                        label="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pr-20"
                        color="purple"
                        containerProps={{
                            className: "min-w-0",
                        }}
                    />
                    <Button
                        type="submit"
                        size="sm"
                        color="purple"
                        className="!absolute right-1 top-1 rounded"
                    >
                        Search
                    </Button>
                </form>
            </div>
            <div className="overflow-hidden">
                <Card className="overflow-auto h-full w-full">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {tableHead.map((head) => (
                                    <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toys.map((toy) => <AllToysTableRow
                                    key={toy._id}
                                    toy={toy}></AllToysTableRow>)
                            }
                        </tbody>
                    </table>
                </Card>
            </div>
        </section>
    );
};

export default AllToys;