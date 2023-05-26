import { useContext, useEffect, useState } from "react";
import useTitle from "../../hook/useTitle";
import { AuthContext } from "../../provider/AuthProvider";
import { Card, Select, Option, Typography } from "@material-tailwind/react";
import MyToysTableRow from "./MyToysTableRow";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import useScroll from "../../hook/useScroll";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const { pathname } = useLocation();
    useScroll(pathname);
    useTitle("My Toys");
    const tableHead = ["Img", "Name", "Seller Name", "Price", "Quantity", "Action"];

    useEffect(() => {
        fetch(`https://b7a11-toy-marketplace-server-side-robiuzzaman4.vercel.app/myToys?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setToys(data);
            })
    }, [user?.email]);

    const handleDeleteToy = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b7a11-toy-marketplace-server-side-robiuzzaman4.vercel.app/myToys/${_id}`, {
                    method: "DELETE"
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Successfully deleted toy',
                                'success'
                            )
                            const remainingToys = toys.filter((toy) => toy._id !== _id);
                            setToys(remainingToys);
                        }
                    })
            }
        })

    }

    const [optionValue, setOptionValue] = useState("")
    useEffect(() => {
        fetch(`https://b7a11-toy-marketplace-server-side-robiuzzaman4.vercel.app/myToySort?sortBy=${optionValue}`)
        .then((res) => res.json())
        .then((data) => {
            const userToys = data.filter((toy) => toy.sellerEmail === user?.email)
            setToys(userToys);
            console.log(userToys);
        })
    }, [optionValue, user?.email]);

    return (
        <section className="max-w-screen-xl mx-auto px-4 py-10 grid gap-10">
            <Typography variant="h3" className="text-center">My Toys</Typography>
            <div className="w-72 mx-auto">
                <Select label="Filter By Price" color="purple" value={optionValue} onChange={(e) => setOptionValue(e)}>
                    <Option value="lowToHigh">Low to High</Option>
                    <Option value="highToLow">High to Low</Option>
                </Select>
            </div>
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
                            toys.map((toy) => <MyToysTableRow
                                key={toy._id}
                                toy={toy}
                                handleDeleteToy={handleDeleteToy}></MyToysTableRow>)
                        }
                    </tbody>
                </table>
            </Card>
        </section>
    );
};

export default MyToys;