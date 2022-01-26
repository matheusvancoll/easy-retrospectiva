import React from 'react'
import './VersionSprintItem.css'

export default function ResumeItemList(props) {
    return(
        <tr className='item-version-row'>
            <td id='item-versao'><a href='/sprints'>{props.versao}</a></td>
            <td id='item-status'>{props.status}</td>
            <td id='item-progresso'>{props.progresso}</td>
            <td id='item-dtInicio'>{props.dtInicio}</td>
            <td id='item-dtVersao'>{props.dtVersao}</td>
            <td id='item-descricao'>{props.descricao}</td>
        </tr>
    )
}