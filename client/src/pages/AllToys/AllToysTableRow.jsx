import { Button, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const AllToysTableRow = ({ toy }) => {
    const { _id, toyName, toyPhoto, toyQuantity, toyPrice, subCategory, sellerName } = toy;

    const { user } = useContext(AuthContext);
    const showNotificaion = () => {
        if (!user) {
            Swal.fire({
                icon: 'warning',
                title: 'You have to log in first to view details',
                showConfirmButton: false,
                timer: 1200
            })
        }
    }

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
                    {subCategory}
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
            <td className="">
                <Link to={`/toys/${_id}`}>
                    <Button onClick={showNotificaion} size="sm" color="purple" variant="text">View Detail</Button>
                </Link>
            </td>
        </tr>
    );
};

export default AllToysTableRow;