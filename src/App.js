// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <header className="title row mb-5 " >
          <h1>Menu del app</h1>
        </header>
      <div className="  container col-md-4">
      <form class="row g-3 ">
      <label  className='titleForm'><h2>Registrate</h2></label>
        <div class="col-md-6 ">
        <input type="text" class="color form-control " placeholder="First name"/>
        </div>
        <div class="col-md-6">
             <input type="text" class=" color form-control" placeholder="Last name"/>
        </div>
        <div class="col-md-12">
             <input type="email" class="color form-control" placeholder="name@example.com"/>
       </div>
       <div class="col-md-12">
           <input type="text" class="color form-control" placeholder="User name"/>
       </div>
       <div class="col-md-12">
               <input type="password" class=" color form-control" placeholder="Password"/>
        </div>
        <div class="col-md-12">  
            <input type="password" class=" color form-control" placeholder="Confirm password"/>
         </div>
         <div class="form-check">
           
           <input class="form-check-input" type="checkbox" />
           <label class="form-check-label">Terminos. condiciones y todo lo demas. </label>
         </div>

       <button type="submit" class="btn btn-primary  col-md-4 offset-md-4 ">Submit</button>

      </form>


      

      </div>







      
    </div>
  );
}

export default App;
