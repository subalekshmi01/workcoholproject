

// import React from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import Images from './components/Images';
// import Movingbuttons from './components/Movingbuttons';
// import Footer from './components/Footer';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Privatepolicies from './components/Privatepolicies';
// import Termsandcondition from './components/Termsandcondition';
// import Googlemap from './components/Googlemap';


// const Homepage = () => (
//   <div>
    
//     <Images />
//     <Movingbuttons />
   
//   </div>
// );

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />

        
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/privacy" element={<Privatepolicies />} />
//           <Route path="/terms" element={<Termsandcondition />} />
//           <Route path="/googlemap" element={<Googlemap/>}/>
//         </Routes>

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;




import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Images from './components/Images';
import Movingbuttons from './components/Movingbuttons';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Privatepolicies from './components/Privatepolicies';
import Termsandcondition from './components/Termsandcondition';
import Googlemap from './components/Googlemap';


const Homepage = () => (
  <div>
    
    <Images />
    <Movingbuttons />
   
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/privacy" element={<Privatepolicies />} /> */}
          {/* <Route path="/terms" element={<Termsandcondition />} /> */}
          {/* <Route path="/googlemap" element={<Googlemap/>}/> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;




