import React from "react";


const MemberBenefits = () => {
    return (
        <div>

            <div className="p-10 bg-gray-100">

                <div>
                    <h2 className="font-medium text-black text-2xl">Member Benefits</h2>
                </div>

                <div className="bg-gradient-to-r from-green-200 to-green-300 mt-4 text-center py-14">
                    <div>
                        <h2 className="text-black font-bold text-4xl uppercase">shop early, relax later</h2>
                    </div>
                    <div className="mt-4 mb-6">
                        <p className="text-black font-normal text-base">Make your December extra easy. Plus, Members get free shipping.</p>
                    </div>
                    <div>
                        <button className="text-black border-2 border-black hover:text-white hover:bg-black font-normal rounded-md px-8 py-2">Shipping & Pickup Options</button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default MemberBenefits;