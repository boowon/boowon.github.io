import React from 'react';
import NavBar from './comp/Navbar';
import AllMbr from './comp/AllMbr';
import './index.css';


export default function App() {
    return (
        <section id="my-page">
            <NavBar />
            <AllMbr />
        </section>
    )
}