import Slider from 'react-slick';

function SliderMain(): JSX.Element {
    const settings = {
        slidesToShow: 3,
        swipeToSlide: true,
        arrows: false,
      };
    return (
        <Slider {...settings} className="slider-electronics">
                {
                    ["iPhone", "AirPods", "MacBook", "iPad", "Apple Watch", "PlayStation", "Dyson"].map((element)=> {
                        return (
                            (<div className="slider-electronics__element">
                                <img className="slider-electronics__element-image" src={`image/${element.replaceAll(' ', '')}-slider.png`} srcSet={`image/${element.replaceAll(' ', '')}-slider@4.png`} alt={element}/>
                                <span className="slider-electronics__element-text">{element}</span>
                            </div>)
                        );
                    })
                }
        </Slider>
    );
};

export default SliderMain;
