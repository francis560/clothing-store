import React from "react";
import "./css/FeaturedStyles.css"


const FeaturedStyles = () => {
    return (
        <div>

            <div className="p-10 bg-gray-100">

                <div>
                    <div>
                        <h2 className="font-medium text-black text-2xl">Featured Styles</h2>
                    </div>

                    <div className="grid grid-cols-3 gap-5 mt-4">

                        <figure className="imghvr-blur">
                            <div className="card-1 h-96"></div>
                            <figcaption className="cursor-pointer">
                                <h3 className="font-medium text-xl mb-5">Lorem, ipsum dolor.</h3>
                                <p className="font-normal text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis beatae, quo dolorem, tenetur quaerat porro at possimus quae, omnis dolore molestiae sunt eligendi minima sed non architecto quas nobis.</p>
                            </figcaption>
                        </figure>

                        <figure className="imghvr-blur">
                            <div className="card-2 h-96"></div>
                            <figcaption className="cursor-pointer">
                                <h3 className="font-medium text-xl mb-5">Lorem, ipsum dolor.</h3>
                                <p className="font-normal text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis beatae, quo dolorem, tenetur quaerat porro at possimus quae, omnis dolore molestiae sunt eligendi minima sed non architecto quas nobis.</p>
                            </figcaption>
                        </figure>

                        <figure className="imghvr-blur">
                            <div className="card-3 h-96"></div>
                            <figcaption className="cursor-pointer">
                                <h3 className="font-medium text-xl mb-5">Lorem, ipsum dolor.</h3>
                                <p className="font-normal text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis beatae, quo dolorem, tenetur quaerat porro at possimus quae, omnis dolore molestiae sunt eligendi minima sed non architecto quas nobis.</p>
                            </figcaption>
                        </figure>

                    </div>
                </div>

            </div>


        </div>
    );
}

export default FeaturedStyles;