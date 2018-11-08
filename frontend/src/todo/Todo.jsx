import React, { Component } from 'react'
import axios from "axios";
import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const URL = 'http://localhost:3001/todos'

export default class Todo extends Component {
  constructor(props){
    super(props)
    this.state = { description: '', done: false, list: [] }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.refresh()
  }

  handleChange(e){
    this.setState({...this.state, description: e.target.value})    
  }

  handleMarkAsDone(todo){
    axios.put(`${URL}/${todo.id}`, { ...todo, done: true })
         .then(resp => this.refresh(this.state.description));
  }
  handleMarkAsPending(todo){
    axios.put(`${URL}/${todo.id}`, { ...todo, done: false })
         .then(resp => this.refresh(this.state.description));
  }
  
  handleAdd(){
    const description = this.state.description
    axios.post(URL, { description: description, done: false })
         .then(resp => this.refresh());
  }

  handleRemove(todo){
    const id = todo.id;
    if (id) {
      axios.delete(`${URL}/${id}`).then(resp => this.refresh(this.state.description));
    }
  }

  handleSearch(){
    this.refresh(this.state.description)
  }

  refresh(description = ''){
    const search = description ? `?q=${description}` : '';
    axios.get(`${URL}${search}`)
         .then(resp => this.setState({...this.state, description: description, list: resp.data}));
  }
  
  render(){
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
        <TodoForm description={this.state.description}
                  handleChange={this.handleChange}
                  handleSearch={this.handleSearch}
                  handleAdd={this.handleAdd}></TodoForm>
        <TodoList 
                  handleMarkAsDone={this.handleMarkAsDone}
                  handleMarkAsPending={this.handleMarkAsPending}
                  handleRemove={this.handleRemove}></TodoList>
      </div>
    )
  }
}