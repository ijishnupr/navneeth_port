import { Fragment } from "react";
import { AttentionSeeker, Hinge, Zoom } from "react-awesome-reveal";

function Tools() {

    return <Fragment>
        <div id="skill" className="container-fluid">
           
            <h2 className="skillhead">Tools</h2>

            <div className="row justify-content-center">

                <Zoom>

                    



                    <div className="col  box">
                        <h3>testing and exploitation</h3>
                        <ul>
                           <li> meta spoit</li>
                           <li> hashcat</li>
                            <li>john the ripper</li>
                            <li>hydra</li>
                            <li>burp suite</li>
                            <li>king phisher</li>

                        </ul>
                    </div>
                    <div className="col  box">
                        <h3>scanning and analysis</h3>
                        <ul>
                            <li>nmap</li>
                            <li>netcat</li>
                            <li>nikto</li>
                            <li>hydra</li>

                            <li>wire shark</li>

                        </ul>
                    </div>
                </Zoom>
            </div>
        </div>
    </Fragment>

}
export default Tools;