import React, { useState } from 'react';


   

const Contact = () => {
  const [data, setData] = useState({
    name:'',
    email:'',
    number: '',
    creditcard: '',
    msg: '',
    username: '',
    city: '',
    Statexx: '',
    zip: '',

    

  });
  console.log(data);



  const iEvent = (event) => {
    // const vaq = event.target.value;
    // const name = event.target.name;
    const {name,value} = event.target;

    setData((vaq) => {
      return {
        ...vaq,
        [name]:value,
      }
    });
  }
  const formSub = (e) => {
    e.preventDefault();
    alert(
      `Name is  ${data.name} .email is ${data.email} number is ${data.number} cred is ${data.creditcard} msg is ${data.msg} username is ${data.username} city is ${data.city} Statexx is ${data.Statexx} zip is ${data.zip}`)

  }


  return (
    <>
     
    
      <div className='my-5'>
        <h1 className='text-center'>Contact us</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>

            


            <form onSubmit={formSub}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name='name'
                value={data.name}
                onChange={iEvent} placeholder="Name"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" name='email' value={data.email}
                onChange={iEvent} placeholder="name@example.com" />
              </div>
              <br/>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Contact Number</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" name='number'
                  value={data.number}
                onChange={iEvent} placeholder="Mobile Number" />
              </div>


              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Credit Card number</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" name='creditcard'
                  value={data.creditcard}
                onChange={iEvent} placeholder="xxxx-xxxx-xxxx-xxxx" />
              </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Messagea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={iEvent}  value={data.msg}></textarea>
              </div>
              
 
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" name='username'
                      value={data.username}
                      onChange={iEvent} placeholder="username" aria-describedby="inputGroupPrepend" required />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">City</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name='city'
                  value={data.city}
                  onChange={iEvent} placeholder="city" required />
              </div>
 
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Your SState</label>
                <select className="form-control" id="exampleFormControlInput1"  name='Statexx'
                  value={data.Statexx}
                  onChange={iEvent} required>
                            <option value='2'>Bangalore</option>
                            <option value='1'>Jharkhand</option>
                          </select>
                          <div className="invalid-feedback">
                            Please select a valid state.
    </div>
              </div>
              

              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Pin code</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" name='zip'
                  value={data.zip}
                  onChange={iEvent} placeholder="city zip" required />
              </div>
{/* 
                          <div className="col-12">
                            <div className="form-check">
                  <input className="form-check-input" name='checkbox' type="checkbox"
                    value={data.checkbox}
                    onChange={iEvent}  id="invalidCheck" required/>
                                <label className="form-check-label" htmlFor="invalidCheck">
                                  Agree to terms and conditions
      </label>
                                <div className="invalid-feedback">
                                  You must agree before submitting.
      </div>
    </div>
                            </div> */}
                            <div className="col-12">
                              <button className="btn btn-outline-secondary" type="submit">Submit form</button>
                            </div>
 
            </form>
          </div>

        </div>
          
      </div>
      
      </>
  );
}

export default Contact;
