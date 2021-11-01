import React from "react";
import './Nav.css';


const Nav = () => {
    return (
        <div>
            <nav className="w-full navbar">
                <div className="flex">

                    <div className="flex mx-auto p-4">

                        <div className="my-auto mx-3">
                            <a href="#">Home</a>
                        </div>
                        <div className="my-auto mx-3">
                            <a href="#">Store</a>
                        </div>
                        <div className="mx-4">
                            <a href="#">
                                <svg width="30" height="30" viewBox="0 0 587 562" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M110.8 561.553L293.497 441.321L476.095 561.553L293.497 0.866699L110.8 561.553Z" fill="#000"/>
                                    <path d="M586.534 251.343L382.648 179.267L426.771 306.695L586.534 251.343Z" fill="#414042"/>
                                    <path d="M204.248 179.267L0.362 251.343L160.124 306.695L204.248 179.267Z" fill="#414042"/>
                                </svg>
                            </a>
                        </div>
                        <div className="my-auto mx-3">
                            <a href="#">Blog</a>
                        </div>
                        <div className="my-auto mx-3">
                            <a href="#">About</a>
                        </div>

                    </div>

                </div>
            </nav>
        </div>
    );
}

export default Nav;