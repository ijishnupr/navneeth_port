
import './App.css';
import { Fragment } from 'react';
import Page from './components/page';
import About from './components/about';
import Skills from './components/skills';
import Contactme from './components/contactme';
import Footer from './components/footer';
import Projects from './components/projects';
import Experience from './components/experience';
import Tools from './components/tools';


function App() {
  return <Fragment>
   <Page/>
   <About/>
   <Skills/>
   <Tools/>
   {/* <Experience/> */}
  <Projects/>
   <Contactme/>
   <p style={{textAlign:'center',paddingTop:'60px'}}>Thank you for scrolling till end :)</p>
   <Footer/>
  </Fragment>
  
 
}

export default App;
