import { Avatar, Timeline, TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Typography } from "@material-tailwind/react";

const Review = () => {
    const reviews = [
        {
            id: 1,
            name: "Sojib Ahmed",
            img: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            reviewText: "I absolutely love shopping at ToyBox! The website is user-friendly, making it easy to find and purchase the perfect toys for my kids. The product selection is fantastic, with a wide range of high-quality toys that keep my little ones entertained for hours. Highly recommended!"
        },
        {
            id: 2,
            name: "Ryhan Uddin",
            img: "https://images.pexels.com/photos/15418106/pexels-photo-15418106/free-photo-of-portrait-of-a-man-standing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            reviewText: "ToyBox is my go-to destination for all things related to kids' toys. The website offers an extensive collection of toys that cater to various age groups and interests. The ordering process is seamless, and the toys always arrive promptly and in excellent condition. I appreciate the exceptional customer service and attention to detail."
        },
        {
            id: 3,
            name: "Tanvir Hasan",
            img: "https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            reviewText: "ToyBox has become a favorite for both me and my kids. The website features a fantastic assortment of educational and fun toys, allowing us to discover new and exciting options. The prices are reasonable, and the delivery is quick. I appreciate the careful packaging that ensures the toys arrive intact. ToyBox has never disappointed us!"
        }
    ]
    return (
        <section className="bg-[#f6f1f7] px-4 py-20">
            <div className="max-w-screen-md mx-auto grid gap-10">
                <Typography variant="h4" className="font-bold">People say about Toybox:</Typography>
                <div className="w-full">
                    <Timeline >
                        {
                            reviews.map((review) => (
                                <TimelineItem key={review.id} data-aos="zoom-in">
                                    <TimelineConnector className="timeline" />
                                    <TimelineHeader>
                                        <TimelineIcon className="p-0">
                                            <Avatar size="sm" color="purple" src={review.img} alt="user 1" withBorder />
                                        </TimelineIcon>
                                        <Typography variant="h5" color="blue-gray">
                                            {review.name}
                                        </Typography>
                                    </TimelineHeader>
                                    <TimelineBody className="pb-8">
                                        <Typography color="gray" className="font-normal text-gray-600">
                                            {review.reviewText}
                                        </Typography>
                                    </TimelineBody>
                                </TimelineItem>
                            ))
                        }
                    </Timeline>
                </div>
            </div>
        </section>
    );
};

export default Review;