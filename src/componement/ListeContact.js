import React, { useEffect, useState } from 'react'
import {  ref,onValue } from "firebase/database";
import fireDB from '../firebase';
import {BrowserRouter as Router, Link, useParams} from 'react-router-dom'
import ViewContact from './ViewContact';


function ListeContact() {
    const [data, setData] = useState({});
    

    useEffect(() => {  
        const db = fireDB;
        const starCountRef = ref(db, 'contact/');
        onValue(starCountRef, (snapshot) => {
           setData({ ...snapshot.val() });

           // updateStarCount(postElement, data);
});


    }, [])
    return (
        <Router>
        <div>
            {
                Object.keys(data).map((id, index) =>{
                    return(
                        <div key={id}>
                            <h1>{index + 1 }</h1> 
                            <h3>{data[id].name}</h3>
                            <Link to ={`/voir/${id}`}>voir detaille</Link>
                        </div>
                    )
                })
            }
        </div>         
        </Router>
    )
}

export default ListeContact
