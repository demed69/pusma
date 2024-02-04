import { Link } from "@inertiajs/react";
import { Helmet } from "react-helmet";

export default function Hompage(props) {
    return (
        <div
            className="flex justify-center items-center min-h-screen bg-neutral-800
        text-white text-2xl"
        >
            <Helmet>
                <title>{props.title}</title>
            </Helmet>
            <h1>{props.description}</h1>
            {props.news ? (
                props.news.map((data, i) => {
                    return (
                        <div key={i}>
                            <p>{data.title}</p>
                            <p>{data.description}</p>
                            <p>{data.category}</p>
                            <p>{data.author}</p>
                        </div>
                    );
                })
            ) : (
                <p>saat ini belom ada data berita</p>
            )}
        </div>
    );
}
