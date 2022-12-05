import React from 'react'
import './Productos.css'
import {db} from '../database/databasehelper'
import {useState, useEffect} from 'react'
import { child, get, ref } from "firebase/database";


function Productos (){
  const [products, setProducts] = useState('')
  
 
  useEffect( () => {
    const dbRef = ref(db);
    get(child(dbRef, `Product`)).then((snapshot) => {
      if (snapshot.exists()) {
        setProducts(snapshot.val())
        products = snapshot.val()
       } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  },[])
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
  return <div>Ola Productos</div>
}

export default Productos