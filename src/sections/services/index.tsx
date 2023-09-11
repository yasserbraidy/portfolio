import './styles/index.css';

export default function Services() {
    return (
        <>
            <div className="container">
                <div className="section-title">
                    <h2>Services</h2>
                    <p>My Services</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="icon-box">
                            <div className="icon">
                                <i className="bx bxl-html5"></i>
                            </div>
                            <h4>
                                <a href="">Client Side</a>
                            </h4>
                            <p>
                                Experienced in client-side development, including creating
                                user-facing web applications and dynamic UI elements using
                                JavaScript and front-end frameworks.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                        <div className="icon-box">
                            <div className="icon">
                                <i className="bx bx-server"></i>
                            </div>
                            <h4>
                                <a href="">Server Side</a>
                            </h4>
                            <p>
                                Skilled in server-side development, including server-side
                                scripting, database management, server configuration, and API
                                development.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                        <div className="icon-box">
                            <div className="icon">
                                <i className="bx bx-tachometer"></i>
                            </div>
                            <h4>
                                <a href="">Softwares</a>
                            </h4>
                            <p>
                                Experienced in software development and knowledge of software
                                development life cycle, client-side and server-side applications,
                                testing, and version control systems.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                        <div className="icon-box">
                            <div className="icon">
                                <i className="bx bxs-business"></i>
                            </div>
                            <h4>
                                <a href="">eCommerce Apps</a>
                            </h4>
                            <p>
                                Experienced in developing eCommerce web applications, including
                                implementing payment gateways, integrating with shipping and tax
                                calculators, and creating user-friendly shopping cart experiences.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                        <div className="icon-box">
                            <div className="icon">
                                <i className="bx bx-game"></i>
                            </div>
                            <h4>
                                <a href="">Game Development</a>
                            </h4>
                            <p>
                                Developing games, including design, programming, and deployment of
                                2D games using Unity.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                        <div className="icon-box">
                            <div className="icon">
                                <i className="bx bxs-devices"></i>
                            </div>
                            <h4>
                                <a href="">Mobile Applications</a>
                            </h4>
                            <p>
                                Developing mobile applications, including designing and coding
                                applications.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>);
}