import React from 'react'
import './Productos.css'
import {db} from '../database/databasehelper'
import {useState, useEffect} from 'react'
import uuid from 'uuid/dist/v4'
import { child, get, ref } from "firebase/database";
import './TaskRow.css'

function Productos (){
  const [products, setProducts] = useState({})
  
  const dbRef = ref(db);
  get(child(dbRef, `Product`)).then((snapshot) => {
    if (snapshot.exists()) {
        setProducts(snapshot.val())
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
/* 
const writeToDatabase = () =>{
  
    const d =  set(ref(db,`/User/${uuid()}`),
   {
      Key: 'gene',
      Area: 'All',
      Id: 'asdsd',
      Password: '115544',
      Role: 'operacional',
      Username: 'elton'
    }
  )
  }
*/

  function handleTodoChange (e) {
 //   setTodo(e.target.value)
  }
  return <div>
    {products[0]}
  </div>

}

export default Productos