import useTitle from "../../hook/useTitle";
import { useLocation } from "react-router-dom";
import useScroll from "../../hook/useScroll";
import { Typography } from "@material-tailwind/react";

const Blogs = () => {
    const { pathname } = useLocation();
    useScroll(pathname);
    useTitle("Blogs");

    const blogData = {
        blogTitle: "How to play with Abacus",
        blogCover: "https://i.ibb.co/6wz24qP/pexels-boom-12585860.jpg",
        introduction: "The abacus is a fascinating tool that has been used for centuries to perform mathematical calculations. Its rich history and enduring popularity stem from its effectiveness in developing mental arithmetic skills and fostering a deep understanding of numbers. Although technological advancements have provided us with powerful calculators and computers, the abacus continues to be a valuable educational tool, especially for children. In this article, we will explore the benefits of playing with the abacus and how it can enhance mathematical abilities and cognitive development.",
        benefits: [
            {
                "title": "Enhancing Numerical Fluency",
                "description": "Playing with the abacus from an early age helps children develop a strong foundation in numerical fluency. The abacus enables them to visualize numbers and perform calculations through hands-on manipulation."
            },
            {
                "title": "Strengthening Problem-Solving Skills",
                "description": "The abacus serves as a platform for problem-solving activities, encouraging children to think critically and analytically. As they encounter arithmetic problems, they must strategize and manipulate the beads to find the correct solution."
            },
            {
                "title": "Developing Concentration and Focus",
                "description": "Playing with the abacus requires concentration and focus, as children must pay attention to each movement of the beads to ensure accurate calculations. The abacus provides an engaging and interactive learning experience that captivates children's interest."
            },
            {
                "title": "Boosting Memory and Visualization",
                "description": "Using the abacus involves visualizing and manipulating numbers mentally. Children learn to create mental images of the abacus and perform calculations without physically moving the beads. This process enhances their memory and visualization skills."
            },
            {
                "title": "Fostering Confidence and Enjoyment in Mathematics",
                "description": "The abacus provides a hands-on and interactive approach to learning mathematics, making it an enjoyable and engaging activity for children. As they gain proficiency in using the abacus, their confidence in mathematical abilities increases."
            }
        ],
        conclusion: "The abacus is not merely a tool for performing calculations; it is an educational instrument that develops mathematical abilities, cognitive skills, and a deep understanding of numbers. By playing with the abacus, children enhance their numerical fluency, problem-solving skills, concentration, memory, visualization, and confidence in mathematics."
    }

    return (


        <section className="max-w-screen-lg mx-auto px-4 py-10 grid gap-12">
            <div className="grid gap-8">
                <div data-aos="zoom-in">
                    <figure className="relative h-60 w-full max-w-md mx-auto">
                        <img
                            className="h-full w-full rounded-xl"
                            src={blogData.blogCover}
                            alt="Blog Cover Photo"
                        />
                        <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/70 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                            <Typography variant="h6" color="blue-gray">
                                {blogData.blogTitle}
                            </Typography>
                        </figcaption>
                    </figure>
                </div>
                <div className="grid gap-4">
                    {/* introduction */}
                    <Typography variant="h3">{blogData.blogTitle}</Typography>
                    <Typography variant="h6">Introduction:</Typography>
                    <p className="text-sm text-gray-500">{blogData.introduction}</p>
                    {/* benefits */}
                    <Typography variant="h6">Benefits:</Typography>
                    <div>
                        {
                            blogData.benefits.map((benefit, index) => (
                                <div key={index} className="pb-4 text-sm text-gray-500">
                                    <p className="text-gray-900"> {index + 1}. {benefit.title}</p>
                                    <p>{benefit.description}</p>
                                </div>
                            ))
                        }
                    </div>
                    {/* conclusion */}
                    <Typography variant="h6">Conclusion:</Typography>
                    <p className="text-sm text-gray-500">{blogData.conclusion}</p>
                </div>
            </div>
        </section>
    );
};

export default Blogs;