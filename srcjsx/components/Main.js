import React from 'react'
import axios from 'axios';

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user:"Erens",
            pwd:""
        }
        this.onClickSubmitLoginForm = this.onClickSubmitLoginForm.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount(){
     
    }

    onClickSubmitLoginForm(){
        let data = new FormData();
        data.append("users",this.state.user);
        data.append("pwd",this.state.pwd);
        console.log(data);
        axios({
            method:'post',
            url:'LoginServlet',
            data:this.toJson(data),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
              }
        }).then((success)=>{
            console.log(success);
            window.location = "LogoutServlet";
        }).catch((err)=>{
            console.log(err);
            
        })
    }
    toJson(formData) {
        var object = {};
        formData.forEach(function (value, key) {
            object[key] = value;
        });
        return JSON.stringify(object);
    }

    componentDidUpdate(){
        console.log(this.state);
    }

    onChange(e){
        const name = e.target.name;
        const value = e.target.value;
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