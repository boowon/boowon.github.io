import React from 'react';
import '../index.css';

export default function Mbr(props) {
    return(
        <div className="mbr">
            <img loading="lazy" src={props.img} alt={props.name}/>
            <h1>{props.name}</h1>
            <h3>({props.age})</h3>
            <h2>{props.role}</h2>
        </div>
    )
}