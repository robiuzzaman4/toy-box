import { Typography } from "@material-tailwind/react";
import useTitle from "../../hook/useTitle";
import { useLocation } from "react-router-dom";
import useScroll from "../../hook/useScroll";

const Blogs = () => {
    const { pathname } = useLocation();
    useScroll(pathname);
    useTitle("Blogs");
    
    return (
        <section className="max-w-screen-md mx-auto px-4 py-10 grid gap-12">
            <div className="grid gap-3">
                <Typography variant="h5" color="blue-gray">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</Typography>
                <Typography variant="sm" color="blue-gray"> An access token and refresh token are commonly used in authentication systems to ensure secure access to protected resources.</Typography>
                <Typography variant="sm" color="blue-gray"> <span className="font-semibold">Access Token:</span> An access token is a credential that is issued by an authentication server after a user successfully authenticates their identity. It is a short-lived token that grants access to specific resources or services on behalf of the authenticated user.</Typography>
                <Typography variant="sm" color="blue-gray"> <span className="font-semibold">Refresh Token:</span>  A refresh token is also issued by the authentication server alongside the access token. Refresh token has a longer lifespan. When the access token expires, the client can use the refresh token to request a new access token without requiring the user to reauthenticate.</Typography>
                <Typography variant="sm" color="blue-gray">They are commonly stored in the local storage or more secure HTTP-only cookies.</Typography>
            </div>
            <div className="grid gap-3">
                <Typography variant="h5" color="blue-gray">2. Compare SQL and NoSQL databases.</Typography>
                <Typography variant="sm" color="blue-gray"> SQL and NoSQL are two different types of database systems.</Typography>
                <Typography variant="sm" color="blue-gray"> <span className="font-semibold">SQL Databases:</span> SQL databases are based on a structured data model, also known as a relational data model. They use tables with predefined schemas to store and organize data. Data is typically stored in rows and columns, allowing for efficient querying and joining of related data.</Typography>
                <Typography variant="sm" color="blue-gray"> <span className="font-semibold">NoSQL Databases:</span>   NoSQL databases, as the name suggests, offer more flexibility in terms of data models. They can handle unstructured, semi-structured, and structured data. NoSQL databases include various data models such as key-value, document, columnar, and graph databases, each designed for specific data storage and retrieval needs.</Typography>
                <Typography variant="sm" color="blue-gray">The choice between SQL and NoSQL databases depends on factors such as data structure, scalability needs, transactional requirements, and development flexibility.</Typography>
            </div>
            <div className="grid gap-3">
                <Typography variant="h5" color="blue-gray">3. What is express js? What is Nest JS?</Typography>
                <Typography variant="sm" color="blue-gray"> <span className="font-semibold">Express.js:</span> Express.js is a popular and lightweight web application framework for Node.js. It provides a minimalistic and flexible set of features to build web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, middleware integration, and creating server-side logic.</Typography>
                <Typography variant="sm" color="blue-gray"> <span className="font-semibold">Nest JS:</span> Nest JS is a progressive Node.js framework built with TypeScript and heavily inspired by Angular. It follows the modular architecture pattern and is designed to develop scalable and maintainable server-side applications.</Typography>
            </div>
            <div className="grid gap-3">
                <Typography variant="h5" color="blue-gray">4. What is MongoDB aggregate and how does it work?</Typography>
                <Typography variant="sm" color="blue-gray"> In MongoDB, the aggregate operation is used to perform complex data analysis and transformation tasks on collections. It allows you to process and manipulate data using a pipeline of multiple stages, providing powerful aggregation capabilities. The aggregation pipeline consists of one or more stages, where each stage performs a specific operation on the input documents and passes the result to the next stage.</Typography>
            </div>
        </section>
    );
};

export default Blogs;