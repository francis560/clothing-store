import React from "react";
import "./css/Nav.css";


const Nav = () => {
    return (
        <div className="stiky top-0">
            <nav className="w-full py-4 bg-white fixed top-0 z-50">

                <div className="flex justify-around">

                    <div>
                        <a href="#">
                            <svg width="30" height="40" viewBox="0 0 74 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.8564 22.2049L20.7649 17.6439L16.3505 10.0021H57.8667L37.1153 45.957L32.7009 38.3019L24.7925 42.8763L37.1153 64.2147L73.6836 0.866699H0.53363L12.8564 22.2049Z" fill="black"/>
                            </svg>
                        </a>
                    </div>

                    <div className="flex">
                        <div className="my-auto mx-3">
                            <a href="#" className="font-medium hover:text-gray-400 active:text-gray-400">Home</a>
                        </div>


                        <div className="my-auto mx-3">
                            <a href="#" className="hover:text-gray-400 active:text-gray-400">Store</a>
                        </div>

                        <div className="my-auto mx-3">
                            <a href="#" className="hover:text-gray-400 active:text-gray-400">Blog</a>
                        </div>

                        <div className="my-auto mx-3">
                            <a href="#" className="hover:text-gray-400 active:text-gray-400">About</a>
                        </div>
                    </div>

                    <div>
                        <button className="py-2 px-6 mx-3 border-2 border-black text-black hover:bg-black hover:text-white rounded-md font-normal">Login</button>
                        <button className="py-2 px-6 mx-3 bg-black text-white rounded-md font-normal">Sign Up</button>
                    </div>

                </div>
                
            </nav>
        </div>
    );
}

export default Nav;