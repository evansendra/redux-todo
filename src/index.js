import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import todoApp from './reducers'
import Root from './components/Root'

// use below to import css styling
// import './index.css';

let store = createStore(todoApp)

render(
  <Root store={store} />,
  document.getElementById('root')
)
