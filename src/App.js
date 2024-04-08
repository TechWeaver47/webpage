import './App.css';
import Navbar from './component/Navbar';
import Intro from './component/Intro';
import Intro2 from './component/Intro2';
import Intro3 from './component/Intro3';
import Intro4 from './component/Intro4';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
   
       <Navbar />
       <Intro/>
       <Intro2/>
       <Intro3/>
       <Intro4/>
       <Footer/>
       
    </div>
  );
}

export default App;
