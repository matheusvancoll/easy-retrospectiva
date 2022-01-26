import React from 'react'

import './HomePage.css'

import ResumeItemList from '../../Components/ListResumeDashboardSprint/'

export default function Dashboard(props) {
    return(
        <div className='main' id={props.toggleState ? "" : "close-sidebar"}>
            <div className='title-page'>
                <p>Início</p>
            </div>

            <div className='sprints-container-cards '>
                <div className='sprint-card'>
                    <div className='sprint-version'>Sprint 87</div>
                    <div className='sprint-itens'>
                        <ResumeItemList Type="" Title="is simply dummy text omply dummy text omply dummy text omply dummy text omply dummy text omply dummy text of the printing and types" User="M.V" Status="Concluido"/>
                        <ResumeItemList Type="" Title="1500s, when an unknown printer took a" User="M.V" Status="Pendente"/>
                        <ResumeItemList Type="" Title="it over 2000 years old. Richard " User="M.V" Status="Pendente"/>
                        <ResumeItemList Type="" Title="unchanged. It was popularised in the 1960s with the release" User="M.V" Status="Pendente"/>
                        <ResumeItemList Type="" Title="1500s, when an unknown printer took a" User="M.V" Status="Concluido"/>
                        <ResumeItemList Type="" Title="Muita tarefa" User="M.V" Status="Pendente"/>
                        <ResumeItemList Type="" Title="1500s, when an unknown printer took a" User="M.V" Status="Pendente"/>
                        <ResumeItemList Type="" Title="Muita tarefa" User="M.V" Status="Pendente"/>
                    </div>
                </div>

                <div className='sprint-card'>
                    <div className='sprint-version'>Sprint 86</div>
                    <div className='sprint-itens'>
                        <ResumeItemList Type="" Title="is simply dummy text of the printing and types" User="M.V" Status="Concluido"/>
                        <ResumeItemList Type="" Title="1500s, when an unknown printer took a" User="M.V" Status="Pendente"/>
                        <ResumeItemList Type="" Title="it over 2000 years old. Richard " User="M.V" Status="Pendente"/>
                        <ResumeItemList Type="" Title="unchanged. It was popularised in the 1960s with the release" User="M.V" Status="Pendente"/>
                        <ResumeItemList Type="" Title="1500s, when an unknown printer took a" User="M.V" Status="Concluido"/>
                        <ResumeItemList Type="" Title="Muita tarefa" User="M.V" Status="Pendente"/>
                        <ResumeItemList Type="" Title="1500s, when an unknown printer took a" User="M.V" Status="Pendente"/>
                        <ResumeItemList Type="" Title="Muita tarefa" User="M.V" Status="Pendente"/>
                    </div>
                </div>

                <div className='sprint-card'>
                    <div className='sprint-version'>Sprint 85</div>
                    <div className='sprint-itens'>
                        <ResumeItemList Type="" Title="Muita tarefa" User="M.V" Status="Pendente"/>
                        <ResumeItemList Type="" Title="Muita tarefa" User="M.V" Status="Pendente"/>
                        <ResumeItemList Type="" Title="1500s, when an unknown printer took a" User="M.V" Status="Pendente"/>
                        <ResumeItemList Type="" Title="Muita tarefa" User="M.V" Status="Pendente"/>
                        <ResumeItemList Type="" Title="1500s, when an unknown printer took a" User="M.V" Status="Pendente"/>
                        <ResumeItemList Type="" Title="Muita tarefa" User="M.V" Status="Concluido"/>
                        <ResumeItemList Type="" Title="Muita tarefa" User="M.V" Status="Pendente"/>
                        <ResumeItemList Type="" Title="Muita tarefa" User="M.V" Status="Pendente"/>
                        <ResumeItemList Type="" Title="Muita tarefa" User="M.V" Status="Pendente"/>
                        <ResumeItemList Type="" Title="Muita tarefa" User="M.V" Status="Pendente"/>
                    </div>
                </div>
            </div>

        </div>
    )
}