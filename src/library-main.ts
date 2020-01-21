import component from './QR.vue'

declare const window: any
declare const global: any

export function install (Vue: any) {
  const _install: any = install
  if (_install.installed) return
  _install.installed = true
  Vue.component('qr', component)
}

const plugin = {
  install
}

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

export default component
