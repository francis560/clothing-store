import React from "react";
import "../components/css/MoreToExplore.css";


const MoreToExplore = () => {
    return (
        <div>

            <div className="p-10 my-10">
                
                <div className="text-black font-medium text-2xl">
                    <h2>More to Explore</h2>
                </div>

                <div className="grid grid-cols-3 gap-5 mt-4">

                    <div className="MoreToExplore-card-1 cursor-pointer h-96"></div>
                    <div className="MoreToExplore-card-2 cursor-pointer h-96"></div>
                    <div className="MoreToExplore-card-3 cursor-pointer h-96"></div>

                </div>

            </div>

        </div>
    );
}

export default MoreToExplore;