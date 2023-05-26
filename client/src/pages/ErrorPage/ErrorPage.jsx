import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <section className="min-h-screen grid place-items-center">
            <div className="grid place-items-center gap-4">
                <img className="w-72" src="/errorimg.svg" alt="404 page" />
                <Link to="/">
                    <Button color="purple">Back to home</Button>
                </Link>
            </div>
        </section>
    );
};

export default ErrorPage;