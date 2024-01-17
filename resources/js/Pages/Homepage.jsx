import { Link } from "@inertiajs/react";
import { Helmet } from "react-helmet";

export default function Hompage(props) {
    console.log(props);
    return (
        <div className="flex justify-center items-center min-h-screen">
            <Helmet>
                <title>{props.title}</title>
            </Helmet>
            <h1>{props.description}</h1>
        </div>
    );
}
