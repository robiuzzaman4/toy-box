import { Button, Input, Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";

const NewsLetter = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        if (email) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Thank you for stay with us.',
                showConfirmButton: false,
                timer: 1500
            })
            e.target.reset();
        }
    }
    return (
        <section className="px-4 py-20">
            <div className="max-w-screen-lg mx-auto grid md:grid-cols-2 gap-4">
                <div className="w-full h-full">
                    <img className="w-full h-full p-4" src="/mail.svg" alt="" />
                </div>
                <div className="w-full p-4">
                    <Typography variant="h4" className="font-bold">To get update news stay with us! </Typography>
                    <form onSubmit={handleSubscribe} className="mt-8 mb-2 w-full">
                        <div className="mb-4 flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <Input type="email" name="email" color="purple" size="lg" label="Email" required />
                            </div>
                        </div>
                        <Button type="submit" color="purple" className="mt-6" fullWidth>
                            Subscribe
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;