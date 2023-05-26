import { Chip } from "@material-tailwind/react";

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-t from-purple-50 to-white">
            <div className="max-w-screen-xl mx-auto px-4 py-20">
                <div className="grid place-items-center gap-4 py-20">
                    <Chip value="number #1" variant="ghost" color="purple" className="w-fit" />
                    <h1 className="text-center lg:px-52 leading-snug text-5xl font-bold">
                        Discover world best tranding Educational Toys.
                    </h1>
                </div>
            </div>

            <div className="absolute -top-4 -right-4 w-56 h-64 rounded-3xl bg-gradient-to-r from-purple-500 to-indigo-500 opacity-30 rotate-45 filter blur-2xl">
            </div>


        </section>
    );
};

export default Hero;