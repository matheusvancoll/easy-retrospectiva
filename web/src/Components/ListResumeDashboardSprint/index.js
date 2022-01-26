import React from 'react'
import './ResumeItemList.css'

export default function ResumeItemList(props) {
    return(
        <div>
            <a href='/home' className="item-list-resume">
                    <p id='item-type' class="fas fa-check">{props.Type}</p>
                    <p id='item-title'>{props.Title}</p>
                    <p id='item-user'>{props.User}</p>
                    <p id='item-status'>{props.Status}</p>
            </a>
        </div>
    )
}