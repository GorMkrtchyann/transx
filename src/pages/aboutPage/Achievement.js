import React, {useEffect, useState} from 'react';

function Achievement(props) {
    const [isElementInView, setIsElementInView] = useState(false);
    const [numbers, setNumbers] = useState({ num1: 0, num2: 0, num3: 0 });

    useEffect(() => {
        const handleScroll = () => {
            const targetElement = document.getElementById('elementAbout');

            if (targetElement) {
                const elementTop = targetElement.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementTop < windowHeight - 50) {
                    setIsElementInView(true);
                    console.log("top " + elementTop)
                    console.log(windowHeight)
                } else {
                    setIsElementInView(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isElementInView) {
            const intervalId1 = setInterval(() => {
                setNumbers(prevNumbers => {
                    const updatedNum1 = prevNumbers.num1 < 5 ? prevNumbers.num1 + 1 : prevNumbers.num1;
                    return { ...prevNumbers, num1: updatedNum1 };
                });
            }, 50 * 10);

            const intervalId2 = setInterval(() => {
                setNumbers(prevNumbers => {
                    const updatedNum2 = prevNumbers.num2 < 2 ? prevNumbers.num2 + 1 : prevNumbers.num2;
                    return { ...prevNumbers, num2: updatedNum2 };
                });
            }, 50 * 25);

            const intervalId3 = setInterval(() => {
                setNumbers(prevNumbers => {
                    const updatedNum3 = prevNumbers.num3 < 50 ? prevNumbers.num3 + 1 : prevNumbers.num3;
                    return { ...prevNumbers, num3: updatedNum3 };
                });
            }, 50);

            return () => {
                clearInterval(intervalId1);
                clearInterval(intervalId2);
                clearInterval(intervalId3);
            };
        }
    }, [isElementInView]);


    return (
        <section className="achievement-section" ><img className="achievement-section__bg"
                                                      src="img/achievement-map.png" alt="img"/>
            <div className="container achievement-cont" id={"elementAbout"}>
                <div className="row bottom-50">
                    <div className="col-12">
                        <div className="heading heading--center"><span
                            className="heading__pre-title">Achievement</span>
                            <h3 className="heading__title">High work achievements</h3>
                        </div>
                    </div>
                </div>
                <div className="row offset-50">
                    <div className="col-md-6 col-lg-4 text-center">
                        <div className="counter counter--blue">
                            <div className="counter__top"><span
                                className="js-counter counter__count">{numbers.num1}</span><span
                                className="counter__subject">millions</span></div>
                            <div className="counter__lower"><span className="counter__details">Delivered packeges</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 text-center">
                        <div className="counter counter--blue">
                            <div className="counter__top"><span
                                className="js-counter counter__count">{numbers.num2}</span><span
                                className="counter__subject">million</span></div>
                            <div className="counter__lower"><span className="counter__details">Miles driven each of the year</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 text-center">
                        <div className="counter counter--blue">
                            <div className="counter__top"><span
                                className="js-counter counter__count">{numbers.num3}</span><span
                                className="counter__subject">years</span></div>
                            <div className="counter__lower"><span className="counter__details">Total warehouse area</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Achievement;