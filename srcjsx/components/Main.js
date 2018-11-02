import React from "react";
import axios from "axios";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Eren",
      pwd: ""
    };
    this.onClickSubmitLoginForm = this.onClickSubmitLoginForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.testMethod = this.testMethod.bind(this);
  }

  testMethod(object) {
    object.push("str2");
    window.objectTestMethod = object;
  }
  componentWillMount() {
    let object = [];
    object.push("str1");
    this.testMethod(object);
    window.objectWillMount = object;
  }

  onClickSubmitLoginForm() {
    let data = new FormData();
    data.append("users", this.state.user);
    data.append("pwd", this.state.pwd);
    console.log(data);
    axios({
      method: "post",
      url: "/LoginServlet",
      data: this.toJson(data),
      credentials: "same-origin",
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-cache"
      }
    })
      .then(success => {
        console.log(success);
        // this.props.history.push('/LogoutServlet');
        window.location = "/LogoutServlet";
      })
      .catch(err => {
        console.log(err);
      });
  }
  toJson(formData) {
    var object = {};
    formData.forEach(function(value, key) {
      object[key] = value;
    });
    return JSON.stringify(object);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  onChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  render() {
    return (
      <div>
        <input
          onChange={this.onChange}
          name="user"
          type="text"
          value={this.state.user}
        />
        <input onChange={this.onChange} name="pwd" type="password" />
        <input type="submit" onClick={this.onClickSubmitLoginForm} />
      </div>
    );
  }
}
export default Main;
