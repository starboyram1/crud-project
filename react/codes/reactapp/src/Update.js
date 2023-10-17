import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Update(){
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [id, setId] = useState(null);
    let nav=useNavigate();

    useEffect(() => {
            setId(localStorage.getItem('ID'));
            setTitle(localStorage.getItem('Title'));
            setAuthor(localStorage.getItem('Author'));
            setYear(localStorage.getItem('Year'));
            // localStorage.removeItem('ID');
            // localStorage.removeItem('Title');
            // localStorage.removeItem('Author');
            // localStorage.removeItem('Year');
    }, []);

    const updatedData=()=>{
        axios.put(`http://localhost:8080/book/${id}`,{title, author, year});
        nav('/View');
        window.location.reload();
    }


    return(
        <div>
        <form >
            Title: <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}></input><br/>
            Author: <input type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)}></input><br/>
            Year: <input type="text" name="year" value={year} onChange={(e) => setYear(e.target.value)}></input><br/><br/>
            <button type="submit" name="update"  className="btn btn-success" onClick={updatedData}>Update</button>&nbsp;
        </form>
        </div>
    )
}