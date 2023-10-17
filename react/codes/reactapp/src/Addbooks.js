import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Add () {
    const [bookadd, setBookadd]=useState({
        title:"",author:"",year:""}
      );
      const{title,author,year}=bookadd;
      const onInputChange = (e) =>{
        setBookadd({...bookadd, [e.target.name]:e.target.value});
    }
    let nav=useNavigate();

    const addData = (e) => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        formData.append('year', year);
        axios.post(`http://localhost:8080/book`, formData);
        nav('/View');
    }

    return (
        <form className="form form-control-sm display-1 "><pre>
            <label className="form-label" for="title">Title: </label><br/>
            <input className="form-control-sm" type="text" name="title" value={title} onChange={(e)=>onInputChange(e)}></input><br/>
            <label className="form-label" for="author">Author: </label><br/>
            <input className="form-control-sm" type="text" name="author" value={author} onChange={(e)=>onInputChange(e)}></input><br/>
            <label className="form-label" for="year">Year: </label><br/>
            <input className="form-control-sm" type="text" name="year" value={year} onChange={(e)=>onInputChange(e)}></input><br/><br/>
            <input type="submit" name="add" value="add" className="btn btn-success" onClick={(e)=>addData(e)}></input>&nbsp;
            </pre>
        </form>

    )
}