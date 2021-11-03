import React from "react";


const Footer = () => {
    return (
        
        <div>

            <div className="pt-12 mt-20 bg-black text-white font-medium">
                <footer id="footer" className="relative z-50">
                    <div tabindex="0" aria-label="footer" className="focus:outline-none border-t border-b border-gray-200 py-16">
                        <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
                            <div className="lg:flex">
                                <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
                                    <div className="w-full lg:w-1/2 px-6">
                                        <ul>
                                            <li><a className="focus:outline-none focus:underline  text-xs lg:text-sm leading-none hover:text-brand" href="#">Components</a></li>
                                            <li className="mt-6"><a className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand" href="#">Templates</a></li>
                                            <li className="mt-6"><a className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand" href="#">Pricing</a></li>
                                            <li className="mt-6"><a className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand" href="#">FAQ</a></li>
                                        </ul>
                                    </div>
                                    <div className="w-full lg:w-1/2 px-6">
                                        <ul>
                                            <li><a className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand" href="#">Free components</a></li>
                                            <li className="mt-6"><a className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand" href="#">Blog</a></li>
                                            <li className="mt-6"><a className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand" href="#">Changelog</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 flex">
                                    <div className="w-full lg:w-1/2 px-6">
                                        <ul>
                                            <li><a href="javascript:void(0)" className="focus:underline focus:outline-none text-xs lg:text-sm leading-none hover:text-brand">Privacy policy</a></li>
                                            <li className="mt-6"><a className="focus:underline focus:outline-none text-xs lg:text-sm leading-none hover:text-brand" href="#">Terms of service</a></li>
                                        </ul>
                                    </div>
                                    <div className="w-full lg:w-1/2 px-6 flex flex-col justify-between">
                                        
                                        <div className="flex items-center mb-6">

                                            <a aria-label="Twitter"  href="javascript:void(0)" className="ml-4">
                                                <div className="">
                                                    <svg className="footer-icon feather feather-twitter cursor-pointer hover:text-brand" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                                    </svg>
                                                </div>
                                            </a>

                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-16 flex flex-col justify-center items-center">
                        <a className="focus:outline-none" tabindex="0" role="link" aria-label="home link" href="#">
                            <svg width="30" height="40" viewBox="0 0 74 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.8564 22.2049L20.7649 17.6439L16.3505 10.0021H57.8667L37.1153 45.957L32.7009 38.3019L24.7925 42.8763L37.1153 64.2147L73.6836 0.866699H0.53363L12.8564 22.2049Z" fill="white"/>
                            </svg>
                        </a>
                        <p tabindex="0" className="focus:outline-none mt-6 text-xs lg:text-sm leading-none">2021 Tailwind UI Kit. All Rights Reserved.</p>
                    </div>
                </footer>
            </div>
        
        </div>

    );
}

export default Footer;