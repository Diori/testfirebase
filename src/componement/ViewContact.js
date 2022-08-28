import React, { useEffect, useState } from 'react'
import { ref, child, get} from "firebase/database";
import fireDB from '../firebase';

function ViewContact(props) {
    const [user, setUser] = useState({});

    useEffect(() =>{
      const dbRef = ref(fireDB);
get(child(dbRef, `contact/${props.match.params.id}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
    setUser({...snapshot.val()})
  } else {
    console.log("No data nass");
  }
}).catch((error) => {
  console.error(error);
});
    }, [props.match.params.name]);


    return (
        <div>
        
                  <h3>{user.name}</h3>
                      <h3>{user.email}</h3>
            
        </div>
    )
}

export default ViewContact
