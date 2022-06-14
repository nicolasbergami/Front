import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie'
import './css/menu.css';
import NavbarComps from '../components/NavbarComps';
import Home from '../components/Home/index';
import { CartProvider } from '../Context/CartContext';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"
import SearchComponent from '../components/SearchComponent';



const cookies = new Cookies();

export default function Bicicleta() {

    function cerrar() {
        if (!cookies.get('username')) {
            window.location.href = "./";
        }
    }
    const api = 'https://kitsu.io/api/edge/trending/anime'
    const [bicicletas, setBicicletas] = useState([])

    useEffect(() => {
        getBicicletas()
    }, [])

    function getBicicletas() {
        fetch(api)
            .then(res => res.json())

            .then(response => {
                const { data = [] } = response
                setBicicletas(data)
            })
    }




    return (
        <div>
            <div >
                <NavbarComps />
            </div>

            <div className="container-fluid">
                <h2 className='text-center'>Busqueda Bicicletas</h2>
                <SearchComponent />
            </div>

        </div>
    );
}




