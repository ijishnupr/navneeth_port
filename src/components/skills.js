import { Fragment } from "react";
import { AttentionSeeker, Hinge, Zoom } from "react-awesome-reveal";

function Skills() {

    return <Fragment>
        <div id="skill" className="container-fluid pt-5">
            <p className="small text-center mt-3">why ?</p>
            <h2 className="skillhead">Skills</h2>

            <div className="row justify-content-center">

                <Zoom>

                   



                    <div className="col  box">
                        <h3>Technical skill</h3>
                        <ul>
                          <li>penetration testing</li>
                          <li>vulnerability assessment</li>
                          <li>network security</li>
                          <li>information security</li>
                          <li>SOC</li>
                          

                        </ul>
                    </div>
                    
                </Zoom>
            </div>
        </div>
    </Fragment>

}
export default Skills;