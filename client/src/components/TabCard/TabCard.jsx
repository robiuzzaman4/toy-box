import { Button, TabPanel, Typography } from "@material-tailwind/react";
import { StarIcon } from '@heroicons/react/24/solid';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
const TabCard = ({ category }) => {
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

    const { _id, toyName, toyPhoto, toyRating, toyQuantity, toyPrice, subCategory } = category;

    return (
        <TabPanel value={subCategory}>
            <div className="p-4 rounded-xl shadow hover:shadow-md transition-all grid gap-6 bg-white relative">
                <div className="flex items-center justify-between">
                    <div className="h-24 w-24 rounded-full bg-gradient-to-b from-purple-50 to-purple-100">
                        <img className="w-full h-full rounded-full p-2" src={toyPhoto} alt="toyPhoto" />
                    </div>
                    <span className="text-xs">{toyQuantity} Pice </span>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-purple-500">${toyPrice}</span>
                        <div className="flex items-center gap-2">
                            <StarIcon className="w-4 h-4 text-orange-500" />
                            <span className="text-sm">{toyRating.toFixed(1)}</span>
                        </div>
                    </div>
                    <Typography variant="h4" color="blue-gray"> {toyName} </Typography>
                    <Link to={`/toys/${_id}`}>
                        <Button
                        onClick={showNotificaion}
                            color="purple" size="sm"
                            variant="gradient"
                        >
                            View Detail
                        </Button>
                    </Link>
                </div>
            </div>
        </TabPanel>
    );
};

export default TabCard;