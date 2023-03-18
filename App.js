

import React from "react"
import ReactDOM  from "react-dom/client"

const ReactElemFun = ()=> (
    <h1 key='h1' id="idReactEle,"> react element function and as a component </h1>
)
const ReactElem =  (
    <h1 key='h1' id="idReactEle,"> react element elem(jsx) </h1>
)


const Head1 = ()=>{
    return(
        <div>
            {console.log('we can write any js inside these prentreses')}
            
           
           {ReactElemFun()}
           {ReactElem}
           <ReactElemFun/>

            <h1>
                head one
            </h1>
        </div>
    )
}

// const headding = React.createElement('h1',{id:'head'},'hello')
// const headding2 = React.createElement('h2',{id:'head2'},'haii')
// const div = React.createElement('div',{id:'div'},[headding,headding2,head1])
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render( <Head1/ >)