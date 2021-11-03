import React from "react";
import Slider from "react-slick";
import "./css/ProductSlider.css"


const ProductSlider = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    return (
        <div>
            
            <div className="p-10">

                <div className="font-medium text-black text-2xl mb-4">
                    <h2>The Latest And Greatest</h2>
                </div>

                <Slider {...settings}>

                    <div className="p-2 cursor-pointer">
                        <div className="ProductSlider-card-1 h-72"></div>

                        <div className="flex justify-between py-2 text-black font-normal">
                            <p>Lorem, ipsum</p>
                            <p>$170</p>
                        </div>
                    </div>

                    <div className="p-2 cursor-pointer">
                        <div className="ProductSlider-card-2 h-72"></div>

                        <div className="flex justify-between py-2 text-black font-normal">
                            <p>Lorem, ipsum</p>
                            <p>$220</p>
                        </div>
                    </div>

                    <div className="p-2 cursor-pointer">
                        <div className="ProductSlider-card-3 h-72"></div>

                        <div className="flex justify-between py-2 text-black font-normal">
                            <p>Lorem, ipsum</p>
                            <p>$250</p>
                        </div>
                    </div>

                    <div className="p-2 cursor-pointer">
                        <div className="ProductSlider-card-4 h-72"></div>

                        <div className="flex justify-between py-2 text-black font-normal">
                            <p>Lorem, ipsum</p>
                            <p>$150</p>
                        </div>
                    </div>

                    <div className="p-2 cursor-pointer">
                        <div className="ProductSlider-card-5 h-72"></div>

                        <div className="flex justify-between py-2 text-black font-normal">
                            <p>Lorem, ipsum</p>
                            <p>$210</p>
                        </div>
                    </div>

                </Slider>

            </div>

        </div>
    );
}

export default ProductSlider;