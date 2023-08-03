import React from 'react';
import Mbr from './mbr';
import scoups from '../img/scoups.jpg';
import jeonghan from '../img/jeonghan.jpg';
import joshua from '../img/joshua.jpg';
import jun from '../img/jun.jpg';
import hoshi from '../img/hoshi.jpg';
import wonwoo from '../img/wonwoo.jpg';
import woozi from '../img/woozi.jpg';
import the8 from '../img/the8.jpg';
import mingyu from '../img/mingyu.jpg';
import dk from '../img/dk.jpg';
import seungkwan from '../img/seungkwan.jpg';
import vernon from '../img/vernon.jpg';
import dino from '../img/dino.jpg';
import '../index.css';

function Age(date){
    let Birthday = new Date(date);
    let month_diff = Date.now() - Birthday.getTime();
    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    let age = Math.abs(year - 1970);
    return age;
}



export default function AllMbr() {
    return(
        <section id="Svt-mbrs">
            <Mbr
                img= {scoups}
                name="Scoups"
                age= {Age("1995-08-08")}
                role="Leader"
            />
            <Mbr
                img= {jeonghan}
                name="Jeonghan"
                age= {Age("1995-10-04")}
                role="Vocalist"
            />
            <Mbr
                img= {joshua}
                name="Joshua"
                age= {Age("1995-12-30")}
                role="Vocalist"
            />
            <Mbr
                img= {jun}
                name="Jun"
                age= {Age("1996-06-10")}
                role="Dancer"
            />
            <Mbr
                img= {hoshi}
                name="Hoshi"
                age= {Age("1996-06-15")}
                role="Dancer"
            />
            <Mbr
                img= {wonwoo}
                name="Wonwoo"
                age= {Age("1996-07-17")}
                role="Rapper"
            />
            <Mbr
                img= {woozi}
                name="Woozi"
                age= {Age("1996-11-22")}
                role="Leader"
            />
            <Mbr
                img= {the8}
                name="The8"
                age= {Age("1997-11-07")}
                role="Dancer"
            />
            <Mbr
                img= {mingyu}
                name="Mingyu"
                age= {Age("1997-04-06")}
                role="Rapper"
            />
            <Mbr
                img= {dk}
                name="DK"
                age= {Age("1997-02-18")}
                role="Vocalist"
            />
            <Mbr
                img= {seungkwan}
                name="Seungkwan"
                age= {Age("1997-01-16")}
                role="Vocalist"
            />
            <Mbr
                img= {vernon}
                name="Vernon"
                age= {Age("1998-02-18")}
                role="Rapper"
            />
            <Mbr
                img= {dino}
                name="Dino"
                age= {Age("1999-02-11")}
                role="Dancer"
            />
        </section>

    )
}