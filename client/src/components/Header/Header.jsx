import { Avatar, Button, Collapse, IconButton, Navbar, Tooltip, Typography } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
    const { user, userLogout } = useContext(AuthContext);
    const [openNav, setOpenNav] = useState(false);

    const handleLogout = () => {
        userLogout()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Logout Successfull',
                    showConfirmButton: false,
                    timer: 1200
                })
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to="/" className={({ isActive }) => isActive ? "text-purple-500" : ""}>
                    Home
                </NavLink>
            </Typography>
            <Typography
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to="/allToys" className={({ isActive }) => isActive ? "text-purple-500" : ""}>
                    All Toys
                </NavLink>
            </Typography>
            <Typography
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to="/blogs" className={({ isActive }) => isActive ? "text-purple-500" : ""}>
                    Blogs
                </NavLink>
            </Typography>
            {
                user && <Typography
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal"
                >
                    <NavLink to="/myToys" className={({ isActive }) => isActive ? "text-purple-500" : ""}>
                        My Toys
                    </NavLink>
                </Typography>
            }
            {
                user && <Typography
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal"
                >
                    <NavLink to="/addAToy" className={({ isActive }) => isActive ? "text-purple-500" : ""}>
                        Add a Toy
                    </NavLink>
                </Typography>
            }
            {
                user && <Tooltip content={`${user?.displayName}`}>
                    <Avatar src={user?.photoURL} alt="avatar" withBorder={true} size="sm" color="purple" className="p-0.5 cursor-pointer" />
                </Tooltip>
            }
        </ul>
    );
    return (
        <header className="sticky inset-0 z-50 h-max shadow-sm">
            <Navbar shadow={false} className="rounded-none px-4 py-4 mx-auto">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex items-center justify-between text-blue-gray-900">
                        <Link to="/">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 shadow-sm rounded-full">
                                    <img className="w-full h-full" src="/logo.png" alt="logo" />
                                </div>
                                <span className="text-xl font-bold">Toybox</span>
                            </div>
                        </Link>
                        <div className="flex items-center gap-4">
                            <div className="mr-4 hidden lg:block">{navList}</div>
                            {
                                user ?
                                    <Button
                                        onClick={handleLogout}
                                        variant="gradient"
                                        size="sm"
                                        color="red"
                                        className="hidden lg:inline-block"
                                    >
                                        <span>Logout</span>
                                    </Button>
                                    : <Link to="/login">
                                        <Button
                                            variant="gradient"
                                            size="sm"
                                            color="purple"
                                            className="hidden lg:inline-block"
                                        >
                                            <span>Login</span>
                                        </Button>
                                    </Link>
                            }
                            <IconButton
                                variant="text"
                                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                                onClick={() => setOpenNav(!openNav)}
                            >
                                {
                                    openNav ? <XMarkIcon className="h-6 w-6" />
                                        : <Bars2Icon className="h-6 w-6" />
                                }
                            </IconButton>
                        </div>
                    </div>
                    <Collapse open={openNav}>
                        <div>
                            <div>
                                {navList}
                            </div>
                            <div>
                                {
                                    user ? <Button
                                        onClick={handleLogout}
                                        variant="gradient"
                                        size="sm"
                                        color="red"
                                        className="mb-2"
                                        fullWidth
                                    >
                                        <span>Logout</span>
                                    </Button>
                                        : <Link to="/login">
                                            <Button variant="gradient" color="purple" size="sm"
                                                fullWidth>
                                                <span>Login</span>
                                            </Button>
                                        </Link>
                                }
                            </div>
                        </div>
                    </Collapse>
                </div>
            </Navbar>
        </header>
    );
};

export default Header;