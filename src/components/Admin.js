import React, { useState } from 'react'
import styled from 'styled-components'
import { database, databse, storage } from '../firebase';

function Admin() {

    cosnt[Obj,setObj]=useState({
        data:"",
        startTime:"",
        endTime:"",
    });
    const[link,setLink] = useState("");
    const[title,setTitle] = useState("");

    const handleClick = async(event)=>{
        if(event==="" ||  category===""){
            alert("Plz enter all details");
            return;
        }
        try{
            database
             
        }catch(e){

        }
    }

  return (
    <>
        <Header>
        </Header>
        <Wrapper>
            <CreateBox>

            </CreateBox>

            <Schedule>
                //UI
            </Schedule>
        </Wrapper>
    </>
 
  )
}



export default Admin