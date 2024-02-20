

import './adminLogin.css'

function adminLogin(){


    return(<>


<div className='flex justify-center items-center h-screen'>

<form  className="form-control" action="">
    <p className="title flex justify-center">Admin Login</p>

    <div className="input-field">
        <input  className="input" type="text"  />
        <label className="label" htmlFor="emailInput">Enter Email</label>
    </div>
    <div className="input-field">
        <input  className="input" type="password"  />
        <label className="label" htmlFor="passwordInput">Enter Password</label>
    </div>

    <button className="submit-btn">Login</button>
    <div className='flex justify-center'>

    </div>
</form>

</div>
    
    
    
    </>)
}


export default adminLogin