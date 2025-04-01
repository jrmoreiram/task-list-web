import React, { Component } from 'react'
import '../App.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class App extends Component {
    constructor() {
        super()
        this.handleAddButton = this.handleAddButton.bind(this)
        this.handleEditButton = this.handleEditButton.bind(this)
        this.handleDeleteButton = this.handleDeleteButton.bind(this)

        this.state = {
            inputTaskTitleValue: '',
            inputTaskDescValue: ''
        };
    }

    handleAddButton() {
        fetch('http://localhost:54814/api/TaskList', {
            mode: 'cors',
            method: 'POST',
            dataType: 'jsonp',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Id: 2,
                Title: this.state.inputTaskTitleValue,
                Description: this.state.inputTaskDescValue,
                Status: false,
                AlterDate: "2018-11-07T01:04:49.477Z"

            })
        })
            .then((response) => {
                return response.json() // << This is the problem
            })
            .then((responseData) => { // responseData = undefined
                return responseData;
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    handleEditButton() {
        fetch('http://localhost:54814/api/TaskList/1', {
            mode: 'cors',
            method: 'PUT ',
            dataType: 'jsonp',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                return response.json() // << This is the problem
            })
            .then((responseData) => { // responseData = undefined
                return responseData;
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    handleDeleteButton() {
        fetch('http://localhost:54814/api/TaskList/1', {
            mode: 'cors',
            method: 'DELETE',
            dataType: 'jsonp',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                return response.json() // << This is the problem
            })
            .then((responseData) => { // responseData = undefined
                return responseData;
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    updateInputTaskTitleValue(evt) {
        this.setState({
            inputTaskTitleValue: evt.target.value
        });
        console.log(this.state.inputTaskTitleValue)
    }

    updateInputTaskDescValue(evt) {
        this.setState({
            inputTaskDescValue: evt.target.value
        });
        console.log(this.state.inputTaskDescValue)
    }

    // It's a data format example.
    priceFormatter(cell, row) {
        return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
    }

    handleChange() {
        console.log("Handle Change!!")
    }

    render() {
        // products will be presented by react-bootstrap-table
        var products = [{
            id: 1,
            task: "Tarefa 1",
            description: "Teste Tarefa 1.",
            datCreate: "07/11/2018 16:10",
            datAlter: "",
            datConclusion: ""
        }, {
            id: 2,
            task: "Tarefa 2",
            description: "Teste Tarefa 2.",
            datCreate: "07/11/2018 16:18",
            datAlter: "07/11/2018 16:25",
            datConclusion: "07/11/2018 16:30"
        },
        ];

        return (
            <div >
                <div>
                    <form>
                        <h2>TaskListWeb - Lista de Tarefas</h2>
                        <hr />
                        <div className="form-group">
                            <label id='lblTask'>Tarefa</label>
                            <input type="text" className="form-control" placeholder='Tarefa' value={this.state.inputTaskTitleValue} onChange={evt => this.updateInputTaskTitleValue(evt)} />
                            <small id="taskHelp" className="form-text text-muted">Preencha uma tarefa.</small>
                        </div>
                        <br />
                        <div className="form-group">
                            <label id='lblDescricao'>Descrição</label>
                            <input type="text" className="form-control" placeholder='Descrição' value={this.state.inputTaskDescValue} onChange={evt => this.updateInputTaskDescValue(evt)} />
                            <small id="taskHelp" className="form-text text-muted">Preencha uma descrição para tarefa.</small>
                        </div>
                        <br />
                    </form>
                </div>

                <div className='button__container'>
                    <button className='button btn-sm' onClick={this.handleAddButton}>Adicionar Tarefa</button>
                    <button className='button btn-sm' onClick={this.handleEditButton} >Editar Tarefa</button>
                    <button className='button btn-sm' onClick={this.handleDeleteButton}>Excluir Tarefa</button>
                </div>

                <div>
                    <BootstrapTable data={products} striped={true} hover={true} onChange={this.handleChange}>
                        <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
                        <TableHeaderColumn dataField="task" dataSort={true}>Tarefa</TableHeaderColumn>
                        <TableHeaderColumn dataField="description" dataFormat={this.priceFormatter}>Descrição</TableHeaderColumn>
                        <TableHeaderColumn dataField="datCreate" dataSort={true}>Data Criação</TableHeaderColumn>
                        <TableHeaderColumn dataField="datAlter" dataSort={true}>Data Alteração</TableHeaderColumn>
                        <TableHeaderColumn dataField="datConclusion" dataSort={true}>Data Conclusão</TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </div >
        )
    }
}
export default App