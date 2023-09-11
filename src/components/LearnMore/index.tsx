import { ChevronRight } from "react-bootstrap-icons";
import me from "../../assets/img/me.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Row } from "react-bootstrap";

export default function LearnMore() {

    useEffect(() => {
    AOS.init();
    }, []);
    
    return (
        <>
            <div className="section-title">
                <h2>About</h2>
                <p>Learn more about me</p>
            </div>

            <Row>
                <div className="col-lg-4" data-aos="fade-right">
                    <img src={me} className="img-fluid" alt="" />
                </div>
                
                        
                <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                    <h3>Software Engineer</h3>
                    <p className="fst-italic">
                        One of my most productive days was throwing away 1000 lines of
                        code.
                    </p>
                    <div className="row">
                        <div className="col-lg-6">
                            <ul>
                                <li>
                                    <i>
                                        <ChevronRight />
                                    </i>{" "}
                                    <strong>Website:</strong> <span>www.yasserbr.com</span>
                                </li>
                                <li>
                                    <i>
                                        <ChevronRight />
                                    </i>{" "}
                                    <strong>Phone:</strong> <span>+961 76 780 817</span>
                                </li>
                                <li>
                                    <i>
                                        <ChevronRight />
                                    </i>{" "}
                                    <strong>City:</strong> <span>Beirut, Lebanon</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul>
                            <li>
                                <i>
                                <ChevronRight />
                                </i>{" "}
                                <strong>Degree:</strong> <span>Bachelor</span>
                            </li>
                            <li>
                                <i>
                                <ChevronRight />
                                </i>{" "}
                                <strong>Email:</strong> <span>yasser.braidy@gmail.com</span>
                            </li>
                            <li>
                                <i>
                                <ChevronRight />
                                </i>{" "}
                                <strong>Freelance:</strong> <span>Available</span>
                            </li>
                            </ul>
                        </div>
                    </div>
                    <p>
                    Hello World!; I work as a freelancer during the evenings, taking
                    on my clients' websites (built using a variety of site builders
                    and platforms), redesigning them with an eye toward design, and
                    adding distinctive features and functionality to make them shine!
                    During the day, I work on builds and maintenance for numerous
                    client sites. I've always been fascinated by the creative and
                    analytical aspects of growth, so I'm happy to be able to mix the
                    two utilizing the foundation I built in boot camp.
                    </p>
                </div>
            </Row>
        </>
    );
}