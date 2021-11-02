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

                        <div className="card-1 h-96"></div>

                        <div className="card-2 h-96"></div>

                        <div className="card-3 h-96"></div>

                    </div>
                </div>

            </div>


        </div>
    );
}

export default FeaturedStyles;