import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Background from './components/Background';
import { resumeData } from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />
      <div className="content">
        <Hero data={resumeData.personal} />
        <About data={resumeData.personal} />
        <Experience data={resumeData.experience} />
        <Projects data={resumeData.projects} />
        <Skills data={resumeData.skills} />
        <Contact data={resumeData.personal} />
      </div>

      {/* Social Sidebar (Left) */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        color: 'var(--text-secondary)'
      }}
        className="side-element"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Icons would go here, simplistic text for now or import icons */}
          <a href={`https://${resumeData.personal.linkedin}`} target="_blank" rel="noreferrer" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontSize: '12px', fontFamily: 'var(--font-mono)', letterSpacing: '2px' }}>LinkedIn</a>
        </div>
        <div style={{ width: '1px', height: '90px', backgroundColor: 'var(--text-secondary)' }}></div>
      </div>

      {/* Email Sidebar (Right) */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        right: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        color: 'var(--text-secondary)'
      }}
        className="side-element"
      >
        <a href={`mailto:${resumeData.personal.email}`} style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontSize: '12px', fontFamily: 'var(--font-mono)', letterSpacing: '2px', textDecoration: 'none' }}>
          {resumeData.personal.email}
        </a>
        <div style={{ width: '1px', height: '90px', backgroundColor: 'var(--text-secondary)' }}></div>
      </div>

    </div>
  );
}

export default App;
