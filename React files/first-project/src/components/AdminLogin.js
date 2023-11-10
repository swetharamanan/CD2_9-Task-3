import React from 'react'

function AdminLogin() { 
    const history=useHistory();

  const handleRedirect=()=>{
    history.push('/companyLogin');
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

export default AdminLogin;