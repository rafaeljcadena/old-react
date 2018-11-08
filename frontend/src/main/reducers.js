import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  todo: () => ({
    description: 'Ler Livro',
    list: [{
      id: 1,
      description: 'Pagar Fatura',
      done: true
    },
    {
      id: 2,
      description: 'Reunião',
      done: false
    }, {
      id: 3,
      description: 'Consulta médica',
      done: false
    }]
  })
})

export default rootReducer