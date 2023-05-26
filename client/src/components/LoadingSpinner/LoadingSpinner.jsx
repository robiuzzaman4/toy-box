import { Spinner } from "@material-tailwind/react";

const LoadingSpinner = () => {
    return (
        <div className="min-h-screen w-full bg-white absolute inset-0 grid place-items-center z-50">
            <Spinner color="purple"></Spinner>
        </div>
    );
};

export default LoadingSpinner;