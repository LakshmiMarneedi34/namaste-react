import React from "react" //coming from nodemodules we have package react
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"

//React.createElement return object when we render this on to the dom then it becomes a HTML Element
//JSX => React.CreateElement => returns JS Object => HTMLElement(render) --->Babel is converting elemnets into regular js

const App = () => {
    return (
        <div>
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App/>)