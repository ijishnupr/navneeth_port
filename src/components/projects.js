import './css/projects.css'

function Projects() {

    return <div className='container-fluid'>

        <div id="project" className="row mt-5">
            <div className='col mt-5'>
            <p className='small mt-5 text-center'>what ?</p>
                <h2 className="skillhead">Projects</h2>
            </div>
        </div>
        <div className='row justify-content-center'>
            <div className='col service-box'>
                <div className='proj-head'>
                    curemart
                </div>
                <div className='proj-body'>
                    A medical-store management system with token based user authentication and authorization
                    
                </div>
                <div className='proj-foot'>
                    <p className='badge badge-success'>django</p>
                    <p className='badge badge-info'>react</p>
                    <p className='badge badge-primary'>css</p>
                    <p className='badge' style={{backgroundColor:'#563d7c'}} >Bootstrap</p>
                </div>
            </div>
            <div className='col service-box'>
                <div className='proj-head'>
                    agropedia
                </div>
                <div className='proj-body'>
                    This is an agrcultural management website for farmers
                </div>
                <div className='proj-foot'>
                    <p className='badge badge-danger'>HTML</p>
                    <p className='badge badge-primary'>css</p>
                    <p className='badge badge-warning'>JS</p>
                    <p className='badge badge-secondary'>PHP</p>
                </div>
               </div>
            <div className='col service-box'>
                <div className='proj-head'>sorting-visualizer</div>
                <div className='proj-body'>
                    Visualize th sorting algorithms and performs the operation of algorithms step by step as the algorithms works like Bubble Sort, Merge Sort etc</div>
                 <div className='proj-foot'>
                    <p className='badge badge-danger'>HTML</p>
                    <p className='badge badge-primary'>CSS</p>
                    <p className=' badge badge-warning'>JS</p>
                 </div>
            </div>

        </div>
      
    </div>
}

export default Projects;