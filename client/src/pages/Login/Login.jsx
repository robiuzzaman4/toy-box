import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import useTitle from "../../hook/useTitle";
import useScroll from "../../hook/useScroll";
import Swal from "sweetalert2";

const Login = () => {
    const { pathname } = useLocation();
    const { userLogin } = useContext(AuthContext);
    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");

    useScroll(pathname);
    useTitle("Login");

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        setEmailErr("");
        setPasswordErr("");

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successfull',
                    showConfirmButton: false,
                    timer: 1200
                })
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error.message);
                if (error.message === "Firebase: Error (auth/user-not-found).") {
                    return setEmailErr("User not found!");
                }
                if (error.message === "Firebase: Error (auth/wrong-password).") {
                    return setPasswordErr("Wrong password! Try again!")
                }
            })

    }

    return (
        <section className="max-w-screen-xl mx-auto px-4 py-10">
            <div className="w-full md:max-w-md mx-auto">
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" color="blue-gray">
                        Login
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Enter your details to login.
                    </Typography>
                    <form onSubmit={handleLogin} className="mt-8 mb-2 w-full">
                        <div className="mb-4 flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <Input type="email" name="email" color="purple" size="lg" label="Email" />
                                {
                                    emailErr && <span className=" font-normal text-xs text-red-500">{emailErr}</span>
                                }
                            </div>
                            <div>
                                <Input type="password" name="password" color="purple" size="lg" label="Password" />
                                {
                                    passwordErr && <span className="font-normal text-xs text-red-500">{passwordErr}</span>
                                }
                            </div>
                        </div>
                        <Button type="submit" color="purple" className="mt-6" fullWidth>
                            Login
                        </Button>
                        <Typography color="gray" className="mt-4 text-center font-normal text-sm">
                            Don&apos;t have an account?{" "}
                            <Link to="/register" className="font-medium text-purple-500">
                                Register
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

export default Login;