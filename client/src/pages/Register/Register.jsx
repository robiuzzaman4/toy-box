import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import useTitle from "../../hook/useTitle";
import useScroll from "../../hook/useScroll";
import Swal from "sweetalert2";

const Register = () => {
    const { pathname } = useLocation();
    const { userRegister } = useContext(AuthContext);
    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const navigate = useNavigate();

    useScroll(pathname);
    useTitle("Register");

    const handleRegister = (e) => {
        e.preventDefault();
        setEmailErr("");
        setPasswordErr("");

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        userRegister(email, password)
            .then((result) => {
                const user = result.user;
                updateUser(user, name, photo);
                setEmailErr("");
                setPasswordErr("");
                form.reset();
                Swal.fire({
                    icon: 'success',
                    title: 'Registered Successfull Login Now',
                    showConfirmButton: false,
                    timer: 1200
                })
                navigate("/login");
            })
            .catch((error) => {
                console.log(error.message);
                if (error.message === "Firebase: Error (auth/email-already-in-use).") {
                    return setEmailErr("Already used this email");
                }
                if (error.message === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
                    return setPasswordErr("Password should be at least 6 characters")
                }
            })

        const updateUser = (user, name, photo) => {
            updateProfile(user, {
                displayName: name,
                photoURL: photo
            })
                .then(() => {
                    console.log("Profile Updated");
                })
                .catch((error) => {
                    console.log(error.message);
                })
        }
    }

    return (
        <section className="max-w-screen-xl mx-auto px-4 py-10">
            <div className="w-full md:max-w-md mx-auto">
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" color="blue-gray">
                        Register
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Enter your details to register.
                    </Typography>
                    <form onSubmit={handleRegister} className="mt-8 mb-2 w-full">
                        <div className="mb-4 flex flex-col gap-6">
                            <Input type="text" name="name" color="purple" size="lg" label="Name" required />
                            <div className="flex flex-col gap-2">
                                <Input type="email" name="email" color="purple" size="lg" label="Email" required />
                                {
                                    emailErr && <span className=" font-normal text-xs text-red-500">{emailErr}</span>
                                }
                            </div>
                            <div className="flex flex-col gap-2">
                                <Input type="password" name="password" color="purple" size="lg" label="Password" required />
                                {
                                    passwordErr && <span className="font-normal text-xs text-red-500">{passwordErr}</span>
                                }
                            </div>
                            <Input type="text" name="photo" color="purple" size="lg" label="Photo URL" required />
                        </div>
                        <Button type="submit" color="purple" className="mt-6" fullWidth>
                            Register
                        </Button>
                        <Typography color="gray" className="mt-4 text-center font-normal text-sm">
                            Already have an account?{" "}
                            <Link to="/login" className="font-medium text-purple-500">
                                Login
                            </Link>
                        </Typography>
                    </form>
                </Card>
                <div className="w-full">
                    <SocialLogin />
                </div>
            </div>
        </section>
    );
};

export default Register;