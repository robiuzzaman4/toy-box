import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const MyToysTableRow = ({ toy, handleDeleteToy }) => {
    const { _id, toyName, toyPhoto, toyQuantity, toyPrice, sellerName } = toy;

    return (
        <tr className="even:bg-blue-gray-50/50">
            <td className="p-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-b from-purple-50 to-purple-100">
                    <img className="p-1 rounded-full" src={toyPhoto} alt="toy picture" />
                </div>
            </td>
            <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    {toyName}
                </Typography>
            </td>
            <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    {sellerName}
                </Typography>
            </td>
            <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    ${toyPrice}
                </Typography>
            </td>
            <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    {toyQuantity}
                </Typography>
            </td>
            <td className="p-4 flex items-center gap-2">
                <Link to={`/myToys/${_id}`}>
                    <Button size="sm" color="purple">Update</Button>
                </Link>
                <Button onClick={() => handleDeleteToy(_id)} size="sm" variant="text" color="red">Delete</Button>
            </td>
        </tr>
    );
};

export default MyToysTableRow;