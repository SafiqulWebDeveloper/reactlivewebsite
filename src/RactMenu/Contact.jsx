import React, { useState } from 'react'

const Contact = () => {

  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    msg: '',
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (e) => {
    e.preventDefault();

    setData({
      fullname: '',
      phone: '',
      email: '',
      msg: '',
    }
    )
  }

  return (
    <>
      <div className='contact'>
        <div className='my-5'>
          <h1 className='text-center'>Contact Us</h1>
        </div>
        <div className=' container contact_div'>
          <div className='row'>
            <div className='col-md-6 col-10 mx-auto'>
              <form onSubmit={formSubmit}>
                <div className="form-group">
                  <label for="exampleInputPassword1">FullName</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    name='fullname'
                    value={data.fullname}
                    onChange={inputEvent}
                    placeholder="Enter your name" />
                </div>

                <div className="form-group">
                  <label for="exampleInputPassword1">Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputPassword1"
                    name='phone'
                    value={data.phone}
                    onChange={inputEvent}
                    placeholder="Mobile number" />
                </div>

                <div className="form-group">
                  <label for="exampleInputPassword1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputPassword1"
                    name='email'
                    value={data.email}
                    onChange={inputEvent}
                    placeholder="Enter your email" />
                </div>

                <div className="form-group">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    name='msg'
                    value={data.msg}
                    onChange={inputEvent}
                    rows="3">
                  </textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact