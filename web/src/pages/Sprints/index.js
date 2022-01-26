import * as React from 'react';
import './Sprints.css'

import VersionSprintItem from '../../Components/VersionSprintItem/'

export default function Dashboard(props) {
    return (
        <div className='main' id={props.toggleState ? "" : "close-sidebar"}>
            <div className='title-page'>
                <p>Gestão de Sprints</p>
            </div>

            <div className='btn-nova-versao'>
                <button>
                    <a href='/users'>
                        Nova versão
                    </a>
                </button>
            </div>

            <div className='table-sprints-container'>
                <table className='table-sprints-manager'>
                    <th id='item-versao'>Versão</th>
                    <th id='item-status'>Status</th>
                    <th id='item-progresso'>Progresso</th>
                    <th id='item-dtInicio'>Data de Início</th>
                    <th id='item-dtVersao'>Data da Versão</th>
                    <th id='item-descricao'>Descrição</th>

                    <VersionSprintItem versao="84.1" status="Lançado" progresso="..." dtInicio='01/01/2022' dtVersao='01/01/2022' descricao='Lorem Ipsum' />
                    <VersionSprintItem versao="83.3" status="Lançado" progresso="..." dtInicio='01/01/2022' dtVersao='01/01/2022' descricao='Lorem Ipsum' />
                    <VersionSprintItem versao="83.2" status="Lançado" progresso="..." dtInicio='01/01/2022' dtVersao='01/01/2022' descricao='Lorem Ipsum' />
                    <VersionSprintItem versao="83.1" status="Lançado" progresso="..." dtInicio='01/01/2022' dtVersao='01/01/2022' descricao='Lorem Ipsum' />
                    <VersionSprintItem versao="82.1" status="Lançado" progresso="..." dtInicio='01/01/2022' dtVersao='01/01/2022' descricao='Lorem Ipsum' />
                    <VersionSprintItem versao="81.2" status="Lançado" progresso="..." dtInicio='01/01/2022' dtVersao='01/01/2022' descricao='Lorem Ipsum' />
                    <VersionSprintItem versao="81.1" status="Lançado" progresso="..." dtInicio='01/01/2022' dtVersao='01/01/2022' descricao='Lorem Ipsum' />
                    <VersionSprintItem versao="80.1" status="Lançado" progresso="..." dtInicio='01/01/2022' dtVersao='01/01/2022' descricao='Lorem Ipsum' />
                    <VersionSprintItem versao="79.1" status="Lançado" progresso="..." dtInicio='01/01/2022' dtVersao='01/01/2022' descricao='Lorem Ipsum' />
                    <VersionSprintItem versao="78.1" status="Lançado" progresso="..." dtInicio='01/01/2022' dtVersao='01/01/2022' descricao='Lorem Ipsum' />
                    <VersionSprintItem versao="77.1" status="Lançado" progresso="..." dtInicio='01/01/2022' dtVersao='01/01/2022' descricao='Lorem Ipsum' />
                    <VersionSprintItem versao="76.1" status="Lançado" progresso="..." dtInicio='01/01/2022' dtVersao='01/01/2022' descricao='Lorem Ipsum' />
                    <VersionSprintItem versao="75.1" status="Lançado" progresso="..." dtInicio='01/01/2022' dtVersao='01/01/2022' descricao='Lorem Ipsum' />
                    <VersionSprintItem versao="74.1" status="Lançado" progresso="..." dtInicio='01/01/2022' dtVersao='01/01/2022' descricao='Lorem Ipsum' />
                    <VersionSprintItem versao="73.4" status="Lançado" progresso="..." dtInicio='01/01/2022' dtVersao='01/01/2022' descricao='Lorem Ipsum' />
                    <VersionSprintItem versao="73.3" status="Lançado" progresso="..." dtInicio='01/01/2022' dtVersao='01/01/2022' descricao='Lorem Ipsum' />
                    <VersionSprintItem versao="72.2" status="Lançado" progresso="..." dtInicio='01/01/2022' dtVersao='01/01/2022' descricao='Lorem Ipsum' />
                    <VersionSprintItem versao="71.1" status="Lançado" progresso="..." dtInicio='01/01/2022' dtVersao='01/01/2022' descricao='Lorem Ipsum' />
                    <VersionSprintItem versao="70.1" status="Lançado" progresso="..." dtInicio='01/01/2022' dtVersao='01/01/2022' descricao='Lorem Ipsum' />
                    <VersionSprintItem versao="69.1" status="Lançado" progresso="..." dtInicio='01/01/2022' dtVersao='01/01/2022' descricao='Lorem Ipsum' />
                    <VersionSprintItem versao="68.1" status="Lançado" progresso="..." dtInicio='01/01/2022' dtVersao='01/01/2022' descricao='Lorem Ipsum' />
                </table>
            </div>
        </div>
    )
}
