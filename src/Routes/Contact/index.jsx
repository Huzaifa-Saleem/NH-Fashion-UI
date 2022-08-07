import React, { useState, useRef, useEffect } from "react";
import Button from "../../Components/Button/index";
import "./contact.scss";
const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()

    console.log({name, email, message})
  }
  

  return (
    <>
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56146.712913717376!2d70.23224275965194!3d28.414140189321778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39375c713b45db39%3A0x28af23c1672a0170!2sRahim%20Yar%20Khan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1658047229567!5m2!1sen!2s"
          width="100%"
          height="600px"
          style={{ border: 0 }}
          loading="lazy"
          title="map"
        ></iframe>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <br />
            <br />
            <br />
            <p className="red">INFORMATION</p>
            <h1 className="conUS">Contact Us</h1>
            <p style={{ maxWidth: 500 }}>
              As you might expect of a company that began as a high-end
              interiors contractor, we pay strict attention.
            </p>
            <h3>PAKISTAN</h3>
            <p>
              Rahim Yar Khan, Pakistan <br /> +92 123 456 7890
            </p>
          </div>
          <div className="col-md-6">
            <br />
            <br />
            <br />
            <form onSubmit={handleSubmit}>
              <input
                type="name"
                id="name"
                name="name"
                value={name}
                placeholder="Name"
                onChange={(e) =>
                  setName((e.target.name = e.target.value))
                }
              />
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={(e) =>
                  setEmail((e.target.name = e.target.value))
                }
              />
              <textarea
                type="message"
                id="message"
                name="message"
                value={message}
                placeholder="Message"
                onChange={(e) =>
                  setMessage((e.target.name = e.target.value))
                }
                style={{ height: 100, width: "86%", padding: "7px" }}
              ></textarea>
              <Button title='SEND MESSAGE' src='/'/>
            </form>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default Contact;
