import React from "react";
class MyClassComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = { count:0 };
        console.log('Constructor')
    }
    componentDidMount(){
        console.log('Component did mount')
    }
    shouldComponentUpdate(){
        console.log('ShouldComponentUpdate')
    }
    componentDidUpdate(){
        console.log('Component did update')
    }
    componentWillUnmount(){
        console.log('ComponentWillUnmount')
    }
    handleClick = () => {
        this.setState({ count: this.state.count + 1});
    }
    render(){
        console.log('render');
        return <>
        <div>My First Ever ClassBased Component</div>
        </>
    }
}
export default MyClassComponent