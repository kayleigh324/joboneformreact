import logo from './logo-nobackground.png';
import './App.css';
import Counters from "./counter.jsx";

function App() {
  const handleSubmit = event => {
   event.preventDefault();
   alert('You have submitted the form.')
 }
  return(
    <div className="wrapper">
      <img src={logo}></img>
      <h1>Job One Registration Form</h1>
      <form onSubmit={this.doSomething}>
      <fieldset>
          <label>
           <p>Name</p>
           <input name="name" />
         </label>
         <label>
           <p>Address</p>
           <input address="address" />
         </label>
       </fieldset>
       <button class="button" type="submit">Submit</button>
      </form>
    </div>
  )
}
return <form onSubmit={this.doSomething}>
        <button>Click me</button>
        </form>;

export default App;
