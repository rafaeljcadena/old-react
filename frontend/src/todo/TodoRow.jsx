import React from 'react'
import IconButton from '../template/IconButton'

export default props => {

  // const renderRows = () => {
    const list = props.list || [];
    return (
        list.map(todo => {
      <React.Fragment>
        <tr key={todo.id}>
          <td>
            {todo.description}
          </td>
          <td>
            <IconButton style='danger' icon='trash-o'
                        onClick={() => props.handleRemove(todo)}></IconButton>
          </td>
        </tr>
      </React.Fragment>
        })
      )
    // }
    // const list = props.list || []
    // return (
    //   renderRows()
    // )
  }
  