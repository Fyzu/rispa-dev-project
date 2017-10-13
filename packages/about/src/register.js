import About from './containers/About/About'
// import reducer, { action } from './redux/reducer'
// import { when, match } from '@rispa/redux/when'

const registerReducer = () => {
  // store.injectReducer('reducerName', reducer)
}

const registerWhen = () => {
  // when(match('/'), () => action(), true)
}

const registerModule = context => {
  registerReducer(context)
  registerWhen(context)

  return About
}

export default registerModule
