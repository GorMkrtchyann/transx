import React from 'react'
import sectionImg from "../assets/images/services/section_1.jpg";

export const ServiceSectionThree = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="row flex-column-reverse flex-lg-row">
                    <div className="col-lg-6 top-50 top-lg-0">
                        <div className="heading bottom-20">
                            <h3 className="heading__title">
                                Our mission is to <span className="box-count--green">give you</span>{" "}
                                good service
                            </h3>
                        </div>
                        <p>
                            <strong>
                                Trumpeter ropefish bonito roughy cobbler dogteeth tetra
                                sturgeon pollock sea snail, saury woody sculpin southern
                                sandfish blue.
                            </strong>
                        </p>
                        <p className="bottom-0">
                            Tench South American darter bobtail snipe eel armored searobin
                            lumpsucker combfish flat loach tang píntano spiderfish gunnel.
                            Skilfish, halosaur skilfish manefish, bonnetmouth alfonsino
                            largenose fish moonfish aruana glowlight danio. Basking shark
                            halibut, North Pacific daggertooth, bonnetmouth sand stargazer
                            sand goby. Queen triggerfish sand dab hammerhead shark zebra
                            trout pelican gulper, common tunny boarfish. Pleco riffle dace
                            flier trunkfish: North Pacific
                        </p>
                    </div>
                    <div className="col-lg-6 col-xl-5 offset-xl-1">
                        <img className="w-100" src={sectionImg} alt="img" />
                    </div>
                </div>
            </div>
        </section>
    )
}
