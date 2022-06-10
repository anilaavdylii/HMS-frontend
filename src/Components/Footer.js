import React, { useRef } from 'react';
import { GrLocation } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { BsPhone } from "react-icons/bs"
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import {toast} from 'react-toastify';

function Footer() {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_apwiotn",
          "template_xqxit39",
          form.current,
          "I9gW4BiVw65knnx0-"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
            toast.success('Message sent!')
          },
          (error) => {
            console.log(error.text);
            toast.error('Message not sent!')
          }
        );
    };

  return (
  <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <hr className="clearfix w-100 d-md-none pb-0"/>
            <div className="col-md-5 text-center py-3" >
                <ul className="list-unstyled">
                  <p><MdEmail/>drejtoria.shskuk@rks-gov.net</p>
                </ul>
                <ul className="list-unstyled">
                  <p><BsPhone/>+381 38 500 600</p>
                </ul>
                <ul className="list-unstyled">
                  <p><GrLocation/>Lagjja Spitalit, Prishtine 10000, Kosove</p>
                  <a className="btn btn btn btn-outline-info btn-xs" href="/findPath">Gjej rrugen</a>
                </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
            <StyledContactForm>
              <h5>KONTAKTI</h5>
              <form ref={form} onSubmit={sendEmail}>
                  <label>Emri</label>
                  <input type="text" name="user_name" />
                  <label>Email</label>
                  <input type="email" name="user_email" />
                  <label>Mesazhi</label>
                  <textarea name="message" />
                  <input type="submit" value="Send" />
              </form>
            </StyledContactForm>
            </div>
        </div>
    </div>
    <div className="footer-copyright text-center py-3">© 2020 Copyright: QKUK</div>
</footer>

  )
}
export default Footer

const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: dodgerblue;
      color: white;
      border: none;
    }
  }
`;