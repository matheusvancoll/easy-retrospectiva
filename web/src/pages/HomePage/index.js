import React from 'react'
import { Link } from 'react-router-dom'

import './Dashboard.css'

import ResumeItemList from '../../Components/ListResumeDashboardSprint/ListResumeDashboardSprint'

export default function Dashboard(props) {
    return(
        <div className='main' id={props.toggleState ? "" : "close-sidebar"}>
            <div className='breadcrumb'>
                <p>Início / Resumo das Sprints</p>
            </div>

            <div className='sprints-container-cards '>
                <div className='sprint-card'>
                    <div className='sprint-version'>Sprint 87</div>
                    <div className='sprint-itens'>
                        <ResumeItemList Type="" Title="Muita tarefa" User="M.V" Status="Concluido"/>
                        <ResumeItemList Type="" Title="Muita tarefa" User="M.V" Status="Concluido"/>
                        <ResumeItemList Type="" Title="Muita tarefa" User="M.V" Status="Concluido"/>
                        <ResumeItemList Type="" Title="Muita tarefa" User="M.V" Status="Concluido"/>
                        <ResumeItemList Type="" Title="Muita tarefa" User="M.V" Status="Concluido"/>
                        <ResumeItemList Type="" Title="Muita tarefa" User="M.V" Status="Concluido"/>
                    </div>
                </div>

                <div className='sprint-card'>
                    <div className='sprint-version'>Sprint 87</div>
                    <div className='sprint-itens'>
                        <ResumeItemList Type="" Title="Muita tarefa" User="M.V" Status="Concluido"/>
                        <ResumeItemList Type="" Title="Muita tarefa" User="M.V" Status="Concluido"/>
                        <ResumeItemList Type="" Title="Muita tarefa" User="M.V" Status="Concluido"/>
                        <ResumeItemList Type="" Title="Muita tarefa" User="M.V" Status="Concluido"/>
                        <ResumeItemList Type="" Title="Muita tarefa" User="M.V" Status="Concluido"/>
                    </div>
                </div>
            </div>

        </div>
    )
}