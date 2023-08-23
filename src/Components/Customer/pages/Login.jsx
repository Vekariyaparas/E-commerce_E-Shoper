import React, { useRef } from 'react'
import Header from '../Header'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { BASE_URL } from '../../../api/constant'
import swal from 'sweetalert';

export default function Login() {

  const Username = useRef(" ")
  const Password = useRef(" ")
  const Navigate = useNavigate(" ")

  const adddata = () =>{

    var insert = {
      Username: Username.current.value,
      Password: Password.current.value,
    }

    axios.post(BASE_URL+"Login", insert)
    .then(()=>{
      swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        button: "Aww yiss!",
      });
      Navigate("/")
    });
  }

  return (
    <>
      <Header />
      <div className='customerlogin bg-light p-5'>
        <div className='container m-0 p-0 mx-auto'>
          <form className='w-50 m-auto rounded-3 p-5 bg-light-subtle'>
            <div className='text-center'>
              <h1 className='fw-medium'>LOGIN</h1>
              <i className='bi bi-people fs-1 text-primary'></i>
            </div>
            <div class="input-group mb-3 mt-3">
              <span class="input-group-text" id="basic-addon1"><i className='bi bi-person-fill' style={{ color: "#d19c97" }}></i></span>
              <input type="text" ref={Username} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mt-5 mb-3">
              <span className="input-group-text" id="basic-addon1"><i className='bi bi-lock-fill' style={{ color: "#d19c97" }}></i></span>
              <input type="password" ref={Password} className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                <label className="form-check-label" for="inlineRadio1">Not a Member Yet?</label>
            </div>
            <div className="form-check form-check-inline float-end m-0 p-0">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label className="form-check-label" for="inlineRadio2">Forget password</label>
            </div>
            <div className="col-12 mt-5 text-center">
              <button className="btn btn-outline-primary" type="submit" onClick={adddata}>Login</button>
            </div>
          </form>
        </div>
      </div >
    </>
  )
}
