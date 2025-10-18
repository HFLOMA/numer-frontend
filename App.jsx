import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BisectionMethod from "./components/Root of Equation/BisectionMethod.jsx"; 
import FalsePositionMethod from "./components/Root of Equation/FalsePositionMethod.jsx";
import OnePointIterationMethod from "./components/Root of Equation/OnePointIterationMethod.jsx";
import GraphicalMethod from "./components/Root of Equation/GraphicalMethod.jsx";
import NewtonRaphsonMethod from "./components/Root of Equation/NewtonRaphsonMethod.jsx";
import SecantMethod from "./components/Root of Equation/SecantMethod.jsx";
import CramerRule from "./components/CramerRule.jsx";
import GaussEliminationUI from "./components/GaussElimination.jsx";


function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ color: "blueviolet", fontSize: "60px" }}>Numerical Methods</h1>
      <h2 style={{ fontSize: "30px", color: "gold" }}>Root of Equation</h2>

      <nav>
        <Link to="/bisection" style={{ margin: "10px", fontSize: 25 }}>• Bisection Method</Link>
      </nav>
      <nav>
        <Link to="/falseposition" style={{ margin: "10px", fontSize: 25 }}>• False Position Method</Link>
      </nav>
      <nav>
        <Link to="/onepoint" style={{ margin: "10px", fontSize: 25 }}>• One-Point Iteration Method</Link>
      </nav>
      <nav>
        <Link to="/graphical" style={{ margin: "10px", fontSize: 25 }}>• Graphical Method</Link>
      </nav>
      <nav>
        <Link to="/newtonraphson" style={{ margin: "10px", fontSize: 25 }}>• Newton-Raphson Method</Link>
      </nav>
      <nav>
        <Link to="/secant" style={{ margin: "10px", fontSize: 25 }}>• Secant Method</Link>
      </nav>

      <h2 style={{fontSize:"30px",color:"gold"}}>Linear Algebra</h2> 
      <nav>
        <Link to="/CramerRule" style={{ margin: "10px", fontSize: 25 }}>• Cramer Rule</Link>
      </nav>
      <nav>
        <Link to="/GaussElimination" style={{ margin: "10px", fontSize: 25 }}>• Gauss Elimination</Link>
      </nav>

      <nav>
        <Link  style={{ margin: "10px", fontSize: 25 }}>•Gauss-Jordan Elimination</Link>
      </nav>

       <nav>
        <Link  style={{ margin: "10px", fontSize: 25 }}>•Matrix Inversion</Link>
      </nav>

     
      <h2 style={{fontSize:"30px",color:"gold"}}>Interpolation</h2> 
      <h2 style={{fontSize:"30px",color:"gold"}}>Extrapolation</h2> 
      <h2 style={{fontSize:"30px",color:"gold"}}>Integration</h2> 
      <h2 style={{fontSize:"30px",color:"gold"}}>Differentiation</h2>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bisection" element={<BisectionMethod />} />
        <Route path="/falseposition" element={<FalsePositionMethod />} />
        <Route path="/onepoint" element={<OnePointIterationMethod />} />
        <Route path="/graphical" element={<GraphicalMethod />} />
        <Route path="/newtonraphson" element={<NewtonRaphsonMethod />} />
        <Route path="/secant" element={<SecantMethod />} />
        <Route path="/CramerRule" element={<CramerRule />} />
        <Route path="/GaussElimination" element={<GaussEliminationUI />} />
      </Routes>
    </Router>
  );
}

export default App;
