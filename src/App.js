import styled from 'styled-components';
import Sidebar from './components/sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';

import ResumePage from './pages/resumepage';
import ContactPage from './pages/contact';
import Projects from './pages/project';
function App() {
  return (
    <div className="App">
      
      <Sidebar/>
       <MainContentStyled>
       <div className="lines">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
            <div className="line-4"></div>
          </div>
          <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about"  exact element={<About/>}/>
          <Route path="/resume"  exact element={<ResumePage/>}/>
          <Route path="/projects"  exact element={<Projects/>}/>
          <Route path="/contact"  exact element={<ContactPage/>}/>
            
            
          </Routes>

       </MainContentStyled>

      
     
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  
  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0;
    z-index: -1;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;
export default App;
