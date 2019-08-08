import App from './App.svelte'
import App2 from './App2.svelte'

const name = 'test'

const app = new App({
  target: document.getElementById('app'),
  props: {
    name: name
  }
})

const app2 = new App2({
  target: document.getElementById('app2'),
  props: {
    name: name
  }
})

export default app
