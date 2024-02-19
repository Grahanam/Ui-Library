
import {h,init,classModule,propsModule,styleModule,eventListenersModule} from 'snabbdom'

const patch=init ([classModule,propsModule,styleModule,eventListenersModule])

let mounted=false

//Create Template
export function createTemplate(renderfunc){
  return (state,props)=>renderfunc(state,props)
}

//Update state
export function updateState(newState,App) {
  console.log(App)
  if(document.getElementById('app')){
    render(App(newState,{}));
  }
}

//Component onMount
function onMount(){
  mounted=true
  console.log('Component Mounted')
}

//OnUpdate
function onUpdate(){
  console.log('State updated')
}

//Render Template
export function render(template){
  const vnode=template
  console.log(vnode)
  const container=document.getElementById('app')
  if(!mounted){
    onMount()
  }else{
    onUpdate()
  }
  patch(container,vnode)
}

//Div
export function Div({key,contents}){
  return h('div#app',{key:key},contents)
}
//H1
export function H1({content}){
  return h('div',h('h1',content))
}
//Button
export function Button({onClick,text}){
  return h('div',h('button',{on:{click:onClick}},text))  
}




