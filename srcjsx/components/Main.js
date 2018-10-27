import React from 'react'
import axios from 'axios';

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user:"Eren",
            pwd:""
        }
        this.onClickSubmitLoginForm = this.onClickSubmitLoginForm.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount(){
     
    }

    onClickSubmitLoginForm(){
        let data = {
            user:this.state.user,
            pwd:this.state.pwd
        }
        console.log(data);
        
        axios({
            method:'post',
            url:'LoginServlet',
            data:data,
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
              }
        }).then((success)=>{
            console.log(success);
        }).catch((err)=>{
            console.log(err);
        })
    }

    componentDidUpdate(){
        console.log(this.state);
    }

    onChange(e){
        const name = e.target.name;
        const value = e.target.value;
        console.log(name + value);
        this.setState((prevState) => ({
            ...prevState,
            [name]:value
        }));
    }

    render(){
        return (
            <div>
                <input onChange={this.onChange} name="user" type="text" value={this.state.user}></input>
                <input onChange={this.onChange} name="pwd" type="password" ></input>
                <input type="submit" onClick={this.onClickSubmitLoginForm}></input>
            </div>
        )
    }
}