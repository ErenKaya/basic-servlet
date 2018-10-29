import React from 'react'
import axios from 'axios';
export default class SubMain extends React.Component{

    componentWillMount(){
        axios({
            method:'get',
            url:'Basic-Servlet/LogoutServlet',
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Origin": "*",
                "Cache-Control": "no-cache"
              }
        }).then((success)=>{
            console.log(success);
            
        }).catch((err)=>{
            console.log(err);
            
        })
    }

    render(){
        return (
            <div>saddgvhbj</div>
        )
    }
}