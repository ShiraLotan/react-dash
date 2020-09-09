import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Widgets from "./main/Widgets";
import logo from '../images/logo.jpg';

export default function Features(){
    const history = useHistory();
    const [data, setDate] = useState({})
    useEffect(()=> {
        fetchData();
    },[]);

    async function fetchData(){
            const res =await fetch('https://covid-193.p.rapidapi.com/history?day=2020-06-02&country=usa',{
                method: 'GET',
                headers: {
                    "x-rapidapi-host": "covid-193.p.rapidapi.com",
                    "x-rapidapi-key": "d48d540977msh3fa07820543a991p154cb1jsn3f9c7a3051fb"
                }
            })
            const data = await res.json()
            setDate(data)

        console.log('OUT')

    }
    return (
        <div className="Features">
            <img src={logo}/>
            {history.location.state.map((w, i)=><Widgets key={i} data={w}/>)}
            <i className="fas fa-user"></i>
        </div>
    )
}   
