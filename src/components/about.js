import { Fragment } from "react";
import resume from './img/resume.pdf'
import { AttentionSeeker, Fade, Slide } from "react-awesome-reveal";
import PeoplePerHourWidget from "./peopleperhour";


function About() {

    const handleDownload = () => {
        ;

        // Create a new anchor element
        const anchor = document.createElement('a');
        anchor.href = resume;
        anchor.target = '_blank'; // Open in a new tab
        anchor.download = 'resume.pdf'; // File name to be downloaded as

        // Simulate a click event to trigger the download
        anchor.click();

    };
    return <Fragment>
        <div className="container" style={{ height: '120vh' }}>
            <div className="row">
                <div className="col mt-5">

                    <p className="small text-center">who ?</p>
                    <Slide>
                        <h1 className="text-center mt-3">About me</h1>
                    </Slide>
                    <div className="col mx-auto d-block">
                        <div className="about" >
                            <p className="mt-5">
                                <Fade>

                                    As a dedicated and passionate Cybersecurity Researcher and Analyst, I am driven by a relentless pursuit to protect digital landscapes from evolving threats

                                    My expertise spans across a broad spectrum of cybersecurity domains, including threat analysis, vulnerability assessment, incident response, and security architecture. My analytical acumen and technical proficiency have been honed through extensive hands-on experience in identifying, analyzing, and countering sophisticated cyber threats.

                                    One of my key achievements has been the successful identification and mitigation of several zero-day vulnerabilities, significantly enhancing our organization's security posture. I have also developed and delivered specialized training programs to elevate the cybersecurity awareness and skills of our team members.

                                    Collaboration and knowledge sharing are integral to my approach. I actively participate in cybersecurity forums, contribute to industry publications, and speak at conferences to share insights and foster a collective defense against cyber adversaries. My passion for cybersecurity extends beyond my professional role, as I mentor aspiring cybersecurity professionals and advocate for stronger security practices within the community.

                                    Looking ahead, my mission is to continue pushing the boundaries of cybersecurity research and innovation. I am particularly interested in exploring the potential of artificial intelligence and machine learning in enhancing threat detection and response capabilities. By leveraging cutting-edge technologies and fostering a proactive security culture, I aim to make a significant impact in safeguarding our digital future.

                                    If you are looking for a dedicated cybersecurity expert with a proven track record and a forward-thinking approach, I would be thrilled to connect and explore how we can collaborate to strengthen our cybersecurity landscape.
                                </Fade>
                            </p>





                        </div>


                        <button className="btn btn-outline-light small mt-5" onClick={handleDownload} handleDownload><small>download resume</small></button>
                        {/* &nbsp;  &nbsp; <a className="btn btn-primary small mt-5" href='https://docs.google.com/document/d/13-HlfmmCY1FNNKLK_eawJC-ypdjmoDpZTiU_1F9qxUY/edit?usp=sharing'><small>View resume</small></a> */}

                        {/* &nbsp;  &nbsp;<a href=" https://www.fiverr.com/jishnu__pr" className="btn btn-outline-success small mt-5 "><small>Hire me on fiverr.</small></a>
                        &nbsp;  &nbsp;<a href=" https://www.peopleperhour.com/freelancer/technology-programming/jishnu-pr-full-stack-developer-zaqmvqaz?ref=hireme&rfrd=10584501.2" className="btn btn-outline-warning mt-5"> <small>Hire me on peopleperhour</small></a> */}


                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}
export default About