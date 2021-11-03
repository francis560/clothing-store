import React from "react";
import "./css/Header.css";


const Header = () => {
    return(
        <div>

            <div className="p-10 mt-10">
                
                <div className="contenedor">

                    <div className="header h-full"></div>

                </div>

                <div className="font-medium my-8 text-center text-black">
                    <p>The best gifts  are the ones that let imaginations run wild... and we've got plenty.</p>

                    <div className="mt-4">
                        <button className="rounded-md bg-black text-white px-6 py-2 font-normal mx-3">Shop</button>
                        <button className="rounded-md bg-black text-white px-6 py-2 font-normal mx-3">Explore</button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Header;