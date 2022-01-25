import React from 'react'
import './ResumeItemList.css'

export default function ResumeItemList(props) {
  return(
    <div className="item-list-resume">
      <p class="fas fa-check">{props.Type}</p>
      <p>{props.Title}</p>
      <p>{props.User}</p>
      <p>{props.Status}</p>
    </div>
  )
}