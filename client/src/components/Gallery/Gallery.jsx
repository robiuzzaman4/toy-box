import { Typography } from "@material-tailwind/react";

const Gallery = () => {
    const galleryData = [
        {
            id: 1,
            title: "Play with letter block",
            img: "https://i.ibb.co/Wy6sM5h/pexels-mart-production-7334320.jpg",
            alt: "Kids Toy"
        },
        {
            id: 2,
            title: "Match number block",
            img: "https://i.ibb.co/WWrtFPv/pexels-keira-burton-6623832.jpg",
            alt: "Kids Toy"
        },
        {
            id: 3,
            title: "Play with Abacus",
            img: "https://i.ibb.co/cL83nqr/pexels-yan-krukau-8612931.jpg",
            alt: "Kids Toy"
        },
        {
            id: 4,
            title: "Finding math cube",
            img: "https://i.ibb.co/6wz24qP/pexels-boom-12585860.jpg",
            alt: "Kids Toy"
        },
    ]
    return (
        <section className="max-w-screen-md mx-auto px-4 py-20 grid gap-10 mt-10">
            <Typography variant="h4" className="font-bold">See Galleries</Typography>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    galleryData.map((data) => {
                        return (
                            <div key={data.id} data-aos="zoom-in">
                                <figure className="relative h-52 w-full">
                                    <img
                                        className="h-full w-full rounded-xl"
                                        src={data.img}
                                        alt={data.alt}
                                    />
                                    <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/70 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                                        <Typography variant="h6" color="blue-gray">
                                            {data.title}
                                        </Typography>
                                    </figcaption>
                                </figure>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Gallery;