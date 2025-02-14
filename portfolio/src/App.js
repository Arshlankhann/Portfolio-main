import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';

import './index.css';

function App() {
  return (
    <>
    
   <Sidebar/>
   
    <main className='main'>
      <Home></Home>
      <About></About>
      <Skills/>
      <Services></Services> 
      <Resume></Resume>
      <Portfolio></Portfolio>
      <Contact></Contact>

    </main>
    
    </>
  );

}

export default App;
