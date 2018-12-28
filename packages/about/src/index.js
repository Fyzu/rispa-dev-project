import Loadable from 'react-loadable'

const loadable = context => Loadable({
  loader: () => import('./register').then(module => module.default(context)),
  loading: ({ error }) => {
    error && console.error(error)
    return null
  },
})

const createRoute = context => ({
  path: '/about',
  component: loadable(context),
})

export default createRoute
