import { mount } from 'svelte'
import './spout.css'
import App from './App.svelte'

const app = mount(App, {
  // @ts-ignore
  target: document.getElementById('app'),
})

export default app
