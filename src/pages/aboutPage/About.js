import React from 'react';

const About = (props) => {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xl-5"><img className="w-100 bottom-50" src="img/section_2.jpg"
                                                                alt="img"/>
                            <div className="img-badge"><img className="img-badge__img" src="img/badge-img.png"
                                                            alt="img"/>
                                <h3 className="img-badge__title bottom-0">Faster than <br/>you can imagine</h3>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6 offset-xl-1">
                            <div className="heading bottom-20"><span className="heading__pre-title">About us</span>
                                <h3 className="heading__title">Powerfull Features of <span
                                    className="color--green">Transporterium</span> company</h3>
                            </div>
                            <p>Brook trout powen harelip sucker gibberfish beluga sturgeon coelacanth tidewater goby
                                elephant fish yellowtail slender snipe eel rasbora</p>
                            <p>Rainbowfish powen paddlefish brotula Arctic char zebra bullhead shark. Yellowhead
                                jawfish gianttail temperate ocean-bass Atlantic eel river stingray skilfish.
                                Flounder:</p>
                            <ul className="list list--check list--reset">
                                <li className="list__item">Red salmon skilfish, threadtail mullet southern flounder,
                                    orangespine unicorn fish flounder bobtail snipe eel
                                </li>
                                <li className="list__item">Trumpeter ropefish bonito roughy cobbler dogteeth tetra
                                    Russian sturgeon pollock sea snail
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section pt-0">
                <div className="container">
                    <div className="row flex-column-reverse flex-lg-row">
                        <div className="col-lg-6 top-50 top-lg-0">
                            <div className="heading bottom-20">
                                <h3 className="heading__title">Our mission is to <span className="color--green">give you</span> good
                                    service</h3>
                            </div>
                            <p><strong>Trumpeter ropefish bonito roughy cobbler dogteeth tetra sturgeon pollock sea
                                snail, saury woody sculpin southern sandfish blue.</strong></p>
                            <p className="bottom-0">Tench South American darter bobtail snipe eel armored searobin
                                lumpsucker combfish flat loach tang píntano spiderfish gunnel. Skilfish, halosaur
                                skilfish manefish, bonnetmouth alfonsino largenose fish moonfish aruana glowlight
                                danio. Basking shark halibut, North Pacific daggertooth, bonnetmouth sand stargazer
                                sand goby. Queen triggerfish sand dab hammerhead shark zebra trout pelican gulper,
                                common tunny boarfish. Pleco riffle dace flier trunkfish: North Pacific</p>
                        </div>
                        <div className="col-lg-6 col-xl-5 offset-xl-1"><img className="w-100"
                                                                            src="img/section_1.jpg" alt="img"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;