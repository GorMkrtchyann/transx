import React from 'react'
import serviceFreightImg from '../assets/images/services/service_freight_img.jpg';
import '../assets/style/services.scss'
import serviceDetalisImg  from '../assets/images/services/service_detalis_2.jpg'
export const Freight = () => {
     return (
        <>
            <section className="section service-details">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className=" col-xl-9"><img className="service-details__img w-100 " src={serviceFreightImg} alt="img" />
                            <h4 className="service-details__title">Plane Freight</h4>
                            <p>Eelblenny ghost pipefish, cusk-eel red snapper horsefish, South American darter sailbearer electric stargazer. Elephantnose fish stream catfish halosaur tripletail tilefish Russian sturgeon basslet weasel shark spotted danio. Crestfish stingray lenok leatherjacket Mexican golden trout cobia. Rock beauty sea toad; milkfish Atlantic cod panga Rainbow trout scaly dragonfish--Quillfish treefish basking shark suckermouth armored catfish. Old World rivuline loach goby; Red whalefish electric eel sauger, wahoo bluntnose minnow blue whiting stingfish alewife.</p>
                            <p>Sundaland noodlefish: man-of-war fish Blind shark shark bluntnose knifefish zingel perch pencilfish bobtail snipe eel. Pacific trout spinefoot gombessa dhufish bocaccio porgy capelin hillstream loach beaked salmon pigfish barbel telescopefish? Longfin dragonfish buri! Boarfish quillback ballan wrasse frogfish catfish ballan wrasse broadband dogfish, burma danio. Torpedo pollyfish dogfish shark redlip blenny saw shark Long-finned sand diver duckbill garibaldi; gouramie splitfin California halibut; sabertooth basking shark.</p>
                            <div className="row justify-content-center align-items-center  bottom-50 top-40">
                                <div className="col-sm-6 col-md-5 col-xl-4">
                                    <h5 className="warehouse__subtitle">Industries served</h5>
                                    <ul className="list list--check list--reset">
                                        <li className="list__item">Consumer goods</li>
                                        <li className="list__item">Food & Beverage</li>
                                        <li className="list__item">Electronics</li>
                                    </ul>
                                </div>
                                <div className="col-sm-6 col-md-5 col-xl-4 top-50 top-sm-0">
                                    <h5 className="warehouse__subtitle">Services offered</h5>
                                    <ul className="list list--check list--reset">
                                        <li className="list__item">Shared warehousing</li>
                                        <li className="list__item">Crossdocking/Transloading</li>
                                        <li className="list__item">FBA Preaparation</li>
                                    </ul>
                                </div>
                            </div>
                            <img className="service-details__img w-100 " src={serviceDetalisImg} alt="img" />
                            <p>Grande perch speckled trout! Straptail taimen vimba barbelless catfish sawtooth eel scup perch burrowing goby. Siamese fighting fish Devario dogfish shark.</p>
                            <p>Moonfish triplespine crocodile shark pipefish yellowhead jawfish largemouth bass, bullhead shark Black scabbardfish smalltooth sawfish. Turkeyfish torrent catfish Spanish mackerel; glass knifefish climbing perch guppy eagle ray. Candiru, cuchia velvetfish Australian herring bleak salmon? Butterflyfish trevally gar Quillfish Red whalefish Black tetra Arctic char panga mud cat naked-back knifefish." Manefish sawfish burrowing goby loach climbing catfish eucla cod nurseryfish worm eel. Cowfish ling skipjack tuna. Noodlefish porbeagle shark carpsucker, snake eel silver hake grenadier, "sand tiger southern sandfish loach minnow lake chub."Whiting grunion: sharksucker pigfish </p>
                            <p>North American darter albacore sand eel hoki cobbler European chub sand goby, marblefish. European eel píntano yellow moray ponyfish frilled shark. Skilfish yellowfin croaker Redfin perch spiny-back sawfish huchen tompot blenny; Lost River sucker. Yellow weaver northern clingfish sergeant major horn shark kelpfish, walking catfish Asiatic glassfish. Chubsucker; velvet-belly shark snailfish sailbearer wahoo moonfish blue danio, blue triggerfish slipmouth, "spikefish pike eel bat ray." Kokopu, panga: ropefish seahorclown triggerfish hawkfish snake mackerel.</p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
     }