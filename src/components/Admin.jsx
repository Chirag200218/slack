
import { Button } from '@material-ui/core';

import React, { useState } from 'react'
import { Link, Switch } from 'react-router-dom';
import styled from 'styled-components'
import { db, storage } from '../firebase'
import { doc, onSnapshot, collection, query, where,getDocs ,addDocs,updateDoc} from "firebase/firestore";



 
function Admin() {

    // const[Obj,setObj]=useState({
    //     data:"",
    //     startTime:"",
    //     endTime:"",
    // });
    const[date,setDate] = useState('');
    const[startTime,setStartTime] = useState('');
    const[endTime,setEndtime] = useState('');
    const[category,setCategory]  = useState('c1');
    const[link,setLink] = useState('');
    const[title,setTitle] = useState('');

    const handleClick = (event)=>{
        if(category===''){
            return;
        }
        let obj={
            date:date,
            startTime:startTime,
            endTime:endTime,
            link:link,
            title:title,
        }

        const adminRef = collection(db,'admin');
        getDocs(adminRef).then(resp=>{
            let data= resp.docs.filter((resp)=>resp.id=='ulP0B66ZtSAf3iwHr59M');

            let arr=[];

            if('c1'===category){
                arr = data[0].data().c1;
                arr.push(obj);
                const docRef =doc(db,'admin','ulP0B66ZtSAf3iwHr59M');
                console.log(docRef);
                updateDoc(docRef,{'c1':arr});
            }else if('c2'===category){
                arr = data[0].data().c2;
                console.log(data[0].data());
                arr.push(obj);
                const docRef =doc(db,'admin','ulP0B66ZtSAf3iwHr59M');
                console.log(docRef);
                updateDoc(docRef,{'c2':arr});
            }else if('c3'===category){
                arr = data[0].data().c3;
                arr.push(obj);
                const docRef =doc(db,'admin','ulP0B66ZtSAf3iwHr59M');
                console.log(docRef);
                updateDoc(docRef,{'c3':arr});
            }else if('c4'===category){
                arr = data[0].data().c4;
                arr.push(obj);
                const docRef =doc(db,'admin','ulP0B66ZtSAf3iwHr59M');
                console.log(docRef);
                updateDoc(docRef,{'c4':arr});
            }else if('c5'===category){
                arr = data[0].data().c5;
                arr.push(obj);
                const docRef =doc(db,'admin','ulP0B66ZtSAf3iwHr59M');
                console.log(docRef);
                updateDoc(docRef,{'c5':arr});
            }

            console.log(arr , category);
            
            

        });
      

        // })
        // .catch(err=>{
        //     console.log(err);
        // })
        // console.log(adminRef);
        
        // const docRef =doc(db,'admin','c1');
        // updateDoc(docRef,)
        // .then(resp=>{
            
        // })
    }

    const handleCategory = (event)=>{
        console.log(event.target.value)
        setCategory(event.target.value);
    }

    const openModal = ()=>{
        let modal = document.getElementById("modal");
        // let wrapper = document.getElementById("wrapper");
        // wrapper.style.filter  = 'blur';
        modal.style.display = 'flex';
        modal.style.justifyContent= 'space-around';
        // modal.style.alignItems = 'center';
        modal.style.flexDirection='column';
    }
    const handleChange = (event)=>{
        console.log("uhfeuohohou");
        let name = event.target.name;
        let value = event.target.value;
        if(name==='title'){
            setTitle(value);
        }else if(name=== 'link'){
            setLink(value);
        }else if(name==='date'){
            setDate(value);
        }else if(name==='startTime'){
            setStartTime(value);
        }else{
            setEndtime(value);
        }
    }

  return (
    <>
        <Header>

        </Header>
        <Wrapper id = 'wrapper'>
           
            <CreateBox onClick={openModal}>
                Create Schedule
            </CreateBox>
            

            <Modal id='modal'>
                 <Label> Enter title for meet
                    <Input type='text' value={title} name='title' onChange={handleChange}/>
                 </Label>
                 <Label> Enter Category for meet 
                    <select  type='text' value={category} name='category' onChange={handleCategory}>
                            <option value='c1'  >c1</option>
                            <option value='c2'  >c2</option>
                            <option value='c3' >c3</option>
                            <option value='c4'  >c4</option>
                            <option value='c5'>c5</option>
                    </select>
                 </Label>
                 <Label> Enter Date of meet
                    <Input type='Date' value={date} name='date' onChange={handleChange}/>
                 </Label>
                 <Label> Enter Start time for meet
                    <Input type='time' value={startTime} name='startTime' onChange={handleChange}/>
                 </Label>
                 <Label> Enter End time for meet
                    <Input type='time' value={endTime} name='endTime' onChange={handleChange}/>
                 </Label>
                 <Label> Enter Meeting link for meet
                    <Input type='text'value={link} name='link' onChange={handleChange} />
                 </Label>
                 <Butn onClick={handleClick} >Submit</Butn>
                 
            </Modal>

            <Schedule>
             
             
            </Schedule>
            <a href={`https://caladrius-techathon-master.vercel.app`} style={{color: 'white'}}>Back</a>
        </Wrapper>
    </>
 
  )
}

const Header = styled.div`
    height: 10vh;
    width:100vw;
`;
const Wrapper = styled.div`
    height: 90vh;
    position:relative;
    width:100%;
    border:1px solid red;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: space-between;
    background-color:#1e293b;
`;

const CreateBox = styled.button`
    height: 12vh;
    width: 20vw;
    margin: auto;
    border: 1px solid red;
    display:flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;

`;

const Modal = styled.form`
position: absolute;
    display:none;
    top: 5%;
    left: 34%;
    height: 31rem;
    width: 31rem;
    border: 1px solid green;
    background-color:#e2e8f0;
`;


const Schedule = styled.div`
    height: 65vh;
    width:100%;
`;

const Label = styled.div`
display: block;
margin-left: 10%;
font-size: large;
`;
const Input = styled.input`
display: block;
height: 70%;
width: 70%;
font-size: large;
    
`;

const Butn = styled.div`
height: 7%;
width: 56%;
background-color: white;
border: 1px solid black;
margin-left: 18%;
border-radius: 12px;
display:flex;
justify-content:center;
align-items:center;
`;

export default Admin;