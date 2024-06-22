import { Roll, Zoom } from 'react-awesome-reveal';
import './css/projects.css'

function Projects() {

    return <div className='container-fluid'>

        <div id="project" className="row mt-5">
            <div className='col mt-5'>
                <p className='small mt-5 text-center'>what ?</p>
                <h2 className="skillhead">Projects</h2>
                <p className='small text-center text-warning'> click to use the project</p>
            </div>
        </div>
        <div className='row justify-content-center'>
            <Zoom>

                <div className='col service-box' onClick={() => { window.location.href = "" }}>
                    <div className='proj-head'>
                        car review system
                    </div>
                    <div className='proj-body'>
                        A vehicle rating portal for comparing top-rated four-wheelers, focusing on electric vehicles, with user-company interactions and profile management.

                    </div>
                    <div className='proj-foot'>
                        <p className='badge badge-success'>php</p>
                        <p className='badge badge-info'>HTML</p>
                        <p className='badge badge-primary'>css</p>
                        <p className='badge' style={{ backgroundColor: '#563d7c' }} >Bootstrap</p>
                    </div>
                </div>
                <div className='col service-box'>
                    <div className='proj-head '>
                        image comparison
                    </div>
                    <div className='proj-body'>
                        Implemented a bank security system with standard cameras capturing photos every second, alerting authorities of anomalies, and reducing storage needs.
                    </div>
                    <div className='proj-foot'>

                        <p className='badge badge-secondary'>python</p>
                    </div>
                </div>
                {/* <div className='col service-box' onClick={() => { window.location.href = 'https://ijishnupr.github.io/sorting-visualizer/' }}>
                    <div className='proj-head'>sorting-visualizer</div>
                    <div className='proj-body'>
                        Visualize th sorting algorithms and performs the operation of algorithms step by step as the algorithms works like Bubble Sort, Merge Sort etc</div>
                    <div className='proj-foot'>
                        <p className='badge badge-danger'>HTML</p>
                        <p className='badge badge-primary'>CSS</p>
                        <p className=' badge badge-warning'>JS</p>
                    </div>
                </div>
                <div className='col service-box' onClick={() => { window.location.href = 'https://highonbuzz.netlify.app/' }}>
                    <div className='proj-head'>High on buzz</div>
                    <div className='proj-body'>
                        A platform that connects influencers with brands and brands with influencers for collaboration.</div>
                    <div className='proj-foot'>
                        <p className='badge badge-success'>django</p>
                        <p className='badge badge-info'>react</p>
                        <p className='badge badge-primary'>css</p>
                        <p className='badge' style={{ backgroundColor: '#563d7c' }} >Bootstrap</p>
                    </div>
                </div> */}

            </Zoom>
        </div>

    </div>
}

export default Projects;