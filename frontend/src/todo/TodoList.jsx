import React from 'react'
import { connect } from 'react-redux'
import TodoRow from './TodoRow'
import IconButton from '../template/IconButton'

const TodoList = props => {

  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <tr key={todo.id}>
        <td>
          {todo.description}
        </td>
        <td>
          {todo.done ? 'Sim' : 'Não'}
        </td>
        <td>
          <IconButton style='success' icon='check'
            onClick={() => props.handleMarkAsDone(todo)} hide={todo.done}></IconButton>
          <IconButton style='warning' icon='undo'
            onClick={() => props.handleMarkAsPending(todo)} hide={!todo.done}></IconButton>
          <IconButton style='danger' icon='trash-o'
            onClick={() => props.handleRemove(todo)} hide={!todo.done}></IconButton>
                
        </td>
      </tr>
    ))
  }
  
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Feito</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
        {/* <TodoRow></TodoRow> */}
      </tbody>
    </table>
  )
}

const mapStateToProps = state => ({ list: state.todo.list })
export default connect(mapStateToProps)(TodoList)