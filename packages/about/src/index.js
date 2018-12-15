import Loadable from 'react-loadable'

const loadable = context => Loadable({
  loader: () => import('./register').then(module => module.default(context)),
  loading: () => null,
})

const createRoute = context => ({
  path: '/about',
  component: loadable(context),
})

export default createRoute
