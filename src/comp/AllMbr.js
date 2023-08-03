import React from 'react';
import Mbr from './mbr';
import info from './info';
import '../index.css';



export default function AllMbr() {
    const Allsvt = info.map((mbr) => {
                                   return  <Mbr 
                                            img = {mbr.img}
                                            name = {mbr.name}
                                            age = {mbr.age}
                                            role = {mbr.role}
                                            bias = {mbr.bias}
                                            />
                                    }
                            )
    return(
        <section id="Svt-mbrs">
            {Allsvt}
        </section>

    )
}