import React, {Component,useState } from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router,Route,Switch,Link,useHistory } from 'react-router-dom';
import './App.css';
import Greet from './components/Greet'
import Hello from './components/Hello'

function App() {
  return (
    //<div className="App">
    //  <Hello></Hello>
    //</div>
    <Router>
      <div><Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/adminlogin" component={AdminLogin}/>
        <Route path="/companylogin" component={CompanyLogin}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/company" component={Company}/>
        </Switch>
        </div>
    </Router>
  );
}

function Home(){
  const history=useHistory();

  const companySubmit=()=>{
    history.push('/companyLogin');
  };

  const adminSubmit=()=>{
    history.push('/adminLogin');
  };

  return (
    <div>
    <div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Company</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li style="float: right;"><a href="3">Contact</a></li>
            </ul>
        </div>
        <div>
    <h1>WELCOME TO ABC SHOP</h1>
    <h2>Customer's Trust is Our pride</h2>
</div>
    <div>
        <form onSubmit={companySubmit}>
        <img src="/static/company.jpg"  height="90" id="companylogo"/>
       <input type="submit" id="b1" className="button" value={Company}/>
        </form>
        <form onSubmit={adminSubmit}>
       <img src="/static/admin.jpg"  height="90" id="adminlogo"/>
       <input type="submit" id="b2" className="button" value={Admin}/>
    </form>
    </div>
    </div>
  );
}

function AdminLogin() { 
  const history=useHistory();

const handleSubmit=()=>{
  history.push('/admin');
};

return(
  <div>
<div>
      <ul>
          <li><a href="/templates/index.html">Home</a></li>
          <li><a href="/templates/companylogin.html">Company</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li style="float: right;"><a href="contact.html">Contact</a></li>
      </ul>
  </div>
  <div>
      <h1>ADMINISTRATOR</h1>
  </div>
  <div class="container">
      <img src="/static/user.jpg" height="70" width="70"/>
      <div className="card">
          <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" id="name" name="username"/><br/>
          <input type="password" placeholder="Password" id="name" name="password"/><br/>
          <button type="submit" id="button">Login</button>
      </form>
      </div>
  </div>
  </div>
);
}

function CompanyLogin(){
  const history =useHistory();

  const handleSubmit=()=>{
    history.push('/company');
  };

  return(
    <div>
      <div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/companylogin">Company</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li style="float: right;"><a href="#">Contact</a></li>
        </ul>
    </div>
    <hr>
    <div>
        <h1>WELCOME TO ABC SHOP</h1>
        <h2>Customer's trust is our pride</h2>
    </div>
    
    <div class="container">
        <img src="/static/user.jpg" height="70" width="70"/>
        <div className="card">
            <form >
            <input type="text" placeholder="Company ID" id="name" name="username"><br>
            <input type="password" placeholder="Password" id="name" name="password"><br>
            <button type="submit" id="button">Login</button>
        </form>
        </div>
    </div>
    </div>
  )
}

export default App;
