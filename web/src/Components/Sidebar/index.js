import React from 'react'

import './Sidebar.css'
import logo from '../../assets/img/photo.jpeg'
import ButtonItem from './Button'

function Sidebar(props) {
    return(
        <section className="sidebar" id={props.toggleState ? "" : "responsive-sidebar"}>
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo"/>
                    <h1>Vancoll Studios</h1>
                </div>
            </div>

            <div className="sidebar__menu">
                <ButtonItem link="/home" btnName="Início" icon="tachometer" active={true} url="#" toggleState={props.toggleState}/>
                <ButtonItem link="/products"btnName="Versões" icon="barcode" active={false} url="#" toggleState={props.toggleState}/>
                <ButtonItem link="/clients" btnName="Usuarios" icon="users" active={false} url="#" toggleState={props.toggleState}/>
                
                <div className={props.toggleState ? "sidebar__item logout" : "sidebar__item logout logout-mini"}>
                    <a href='/'>
                        <i className="fa fa-power-off"><span id='logoff'>Sair</span></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Sidebar