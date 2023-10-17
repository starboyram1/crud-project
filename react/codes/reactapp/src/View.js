import {React, useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function View(){
    const[books, setBooks]=useState([]);
    let nav=useNavigate();

    useEffect(()=>{
        viewbooks();
    },[]);

    const viewbooks = async() => {
        const result=await axios.get("http://localhost:8080/getAll");
        setBooks(result.data);
    }
    const onDelete = async(id) => {
        await axios.delete(`http://localhost:8080/book/${id}`);
        window.location.reload();
    }

    const setData = (b) => {
        console.log(b);
        let { id, title, author, year } = b;
        localStorage.setItem('ID', id);
        localStorage.setItem('Title', title);
        localStorage.setItem('Author', author);
        localStorage.setItem('Year', year);
        nav('/Update');
    }
    return (
        <div className='container'>
            <div className='row'>
            <div className='col-sm-3'>
            {books.map((b, index)=>(
                
                <div className='card border-danger bg-opacity-75 bg-warning-subtle' style={{width: "18rem", height: "auto"}} key={b.id}>
                    <p className='card-title '>{b.title}</p>
                    <div className='card-body'>
                        <p className='card-text'>{b.author}</p>
                        <p className='card-text'>{b.year}</p>
                        <button name='update' className='btn btn-warning' onClick={() => setData(b)}>Update</button>&nbsp;
                        <button name='delete' className='btn btn-danger' onClick={() => onDelete(b.id)}>Delete</button>
                    </div>
                </div>
                
                )
            )}
            
            </div>
                </div>
        <br></br></div>
    )
}