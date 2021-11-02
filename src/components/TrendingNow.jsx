import React from "react";
import "./css/TrendingNow.css"


const TrendingNow = () => {
    return (
        <div>

            <div className="p-10">

                <div>
                    <div>
                        <h2 className="font-medium text-black text-2xl">Trending Now</h2>
                    </div>

                    <div className="grid grid-cols-2 mt-5 gap-5">

                        <div className="TrendingNow-card-1 cursor-pointer"></div>

                        <div className="TrendingNow-card-2 cursor-pointer"></div>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default TrendingNow;