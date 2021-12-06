import * as heroicons from "@heroicons/vue/outline"
import * as headlessui from "@headlessui/vue"
export default app => {
Object.entries(headlessui).forEach(([componentName, component]) => {
    if (componentName !== 'default') {
      app.component(String(componentName), component)
    }
  })

Object.entries(heroicons).forEach(([componentName, component]) => {
    if (componentName !== 'default') {
      app.component(String(componentName), component)
    }
  })
console.log(heroicons)
}