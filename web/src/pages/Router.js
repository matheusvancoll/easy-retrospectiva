import React from 'react'
import {useState} from 'react';
import { Switch, Route } from 'react-router-dom'

import Sidebar from '../Components/Sidebar/'
import Navbar from '../Components/Navbar'

import Login from './Login/LoginAcess'
import HomePage from './HomePage'
import Sprints from './Sprints'

export default function Router() {

    const [SidebarOpen, setSidebarOpen] = useState(true)
    function toggleSidebar() { setSidebarOpen(!SidebarOpen) }

    return(
        <Switch>
            <Route exact path="/" component={Login} />

            <Route exact path="/home">
                <Sidebar toggleState={SidebarOpen} toggleMove={toggleSidebar}  home={true}/>
                <Navbar toggleState={SidebarOpen} toggleMove={toggleSidebar}/>
                <HomePage toggleState={SidebarOpen} toggleMove={toggleSidebar}/>
            </Route>

            <Route exact path="/sprints">
                <Sidebar toggleState={SidebarOpen} toggleMove={toggleSidebar} sprints={true} />
                <Navbar toggleState={SidebarOpen} toggleMove={toggleSidebar}/>
                <Sprints toggleState={SidebarOpen} toggleMove={toggleSidebar}/>
            </Route>

            <Route exact path="/users">
                <Sidebar toggleState={SidebarOpen} toggleMove={toggleSidebar} users={true} />
                <Navbar toggleState={SidebarOpen} toggleMove={toggleSidebar}/>
                <Sprints toggleState={SidebarOpen} toggleMove={toggleSidebar}/>
            </Route>

        </Switch>
    )
}