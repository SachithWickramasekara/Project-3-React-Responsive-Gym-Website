import Hero from "./pages/Hero";
import Plans from "./pages/Plans";
import Programs from "./pages/Programs";
import WhyUs from "./pages/WhyUs";
import Testimonial from './pages/Testimonial'
import JoinUs from "./pages/JoinUs";
import Footer from './components/Footer'
// import './App.css';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <WhyUs/>
          <Plans/>
          <Testimonial/>
          <JoinUs/>
          <Footer/>
    </div>
  );
}

export default App;
