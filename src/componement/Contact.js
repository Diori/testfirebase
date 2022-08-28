import React, {useState} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import {useHistory,BrowserRouter as Router, Link, Route,Switch} from 'react-router-dom'
import './Contact.css';
import 'react-toastify/dist/ReactToastify.css';
import firebaseDb from '../firebase';
import {ref, set } from "firebase/database";

  
    /*const isEmail = () =>{
      let mail = document.getElementById('not-mail');
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
      if(email.match(regex)) {
        mail.style.display = 'none';
        return true;
      }else{
        mail.style.display = 'block';
        mail.style.animation = 'dongle 1s';
        setTimeout(()=>{
          mail.style.animation = 'none';
        }, 1000)
        return false
      }
    }     */ 

    const initialState = {
     name : "",
     email : "",
     phone : "",
     message : ""
    }

    
    

    const Add = () =>{
      const [state, setState] = useState(initialState);
      //const [data, setData] = useState({});
      const {name, email, phone, message} = state;

      
      function writeUserData() {
        const db = firebaseDb;
        if(set(ref(db, 'contact/'+name),{
          name,
          email,
          phone,
          message
        })){
          toast.success('bien')
        } else{
          toast.error('mal');

        };
      }

      const history = useHistory;

      
    const handleInputChange = (e) => {
      const {name, value} = e.target;
      setState({...state, [name]:value});
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if(!name || !email || !phone || !message)
      {
        toast.error("vide");
        
      } else{
       writeUserData();
      }
      }

     

  
    return (
     <Router>
      <div>
     <ToastContainer />
     <h2>Contactez-nous</h2>
     <h2><Link to ="/list" >Voir les listes des contactes</Link></h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-content">
          <input htmlFor="name"
            type="text"
            id="name"
            name="name"
            onChange={(e)=>handleInputChange(e)}            
            placeholder="nom *"
            value={name}
            autoComplete="off"
          />
          
          <input htmlFor="phone"
            type="phone"
            id="phone"
            name="phone"
            onChange={(e)=>handleInputChange(e)}
            placeholder="téléphone"
            value={phone}
          />
          <div className="email-content">
            <label id="not-mail">Email non valide</label>
            <input htmlFor="email"
              type="email"
              id="email"
              name="email"
              onChange={(e)=>handleInputChange(e)}
              placeholder="email *"
              value={email}
              autoComplete="off"
            />
          </div>
          <textarea htmlFor="message"
            id="message"
            name="message"
            onChange={(e)=>handleInputChange(e)}
            placeholder="message *"
            value={message}
          />
        </div>
        <div className="form-message"></div>
        <input
          className="button"
          type="submit"
          value="Envoyer"
        />
        
      </form>
      
      </div>
      </Router>
    );
    }


export default Add
