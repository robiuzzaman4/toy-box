import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { userGoogleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        userGoogleLogin()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successfull',
                    showConfirmButton: false,
                    timer: 1000
                })
                navigate(from, { replace: true });
            })
            .catch((error) => console.log(error.message));
    }

    return (
        <div className="text-center grid gap-3">
            <span className="text-center text-gray-800 text-sm">or</span>
            <Button
                onClick={handleGoogleLogin}
                fullWidth
                variant="outlined"
                color="blue-gray"
                className="flex items-center justify-center gap-3"
            >
                <img src="/google.svg" alt="google" className="h-5 w-5" />
                Continue with Google
            </Button>
        </div>
    );
};

export default SocialLogin;