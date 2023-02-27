// src/App.js
import './App.css';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import ironhackLogo from './images/ironhack-logo-xs.png';
import menuTop from './images/menu-top-xs.png';
function App() {
  return (
    <div className="App">

      <div class="topContainer">
        <img src={ironhackLogo} className="ironhackLogo" alt="ironhackLogo" />
        <img src={menuTop} className="menuTop" alt="menuTop" width="18" height="10" />
      </div>
      <div className='text'>
        <h1>Say hello to ReactJS </h1>
        <p>You will learn how to use the most popular frontend Library, and become a
          super Ninja developer. </p>

        <button type="submit" className="btn btn-primary bg-light text-black">Awesome</button>
      </div>

      <div class="iconContainer">
        <article>
          <img src={icon1} className="icon1" alt="icon1"  width="91" height="91" /> 
          <h2> Declarative</h2>
          <p> React makes it painless to create interactive UIs</p>
          </article>
        <article>
          <img src={icon2} className="icon2" alt="icon2" width="91" height="91" /> 
          <h2> Components</h2>
          <p> Build encapsulated components that manage their state</p>
        </article>
        <article>
          <img src={icon3} className="icon3" alt="icon3"  width="91" height="91" /> 
          <h2> Single-Way</h2>
          <p> A set of immutable values are passed to the component's.</p>
        </article>
        <article>
          <img src={icon4} className="icon4" alt="icon4"  width="91" height="91" /> 
          <h2> JSX</h2>
          <p>Statically-typed designed to run on moderns browsers.</p>
        </article>
      </div>


    </div>
  );
}
export default App;