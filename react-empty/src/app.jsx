import React from "react"; 
import ReactDOM from "react-dom";
import "font-awesome/css/font-awesome.min.css";

let name = "youer";
let nameSet = ["youer", "chord", "tom"]
let flag = false;


class ChildA extends React.Component {
    render() {
        return <div>Child A</div>
    }
}

class ChildB extends React.Component {
    render() {
        return <div>Child B</div>
    }
}


class Wrapper extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>{this.props.children}</div>
    }
}

ReactDOM.render(
    <Wrapper>
        <ChildB></ChildB>
        <ChildA></ChildA>
    </Wrapper>
    ,
    document.getElementById('app')
);
 