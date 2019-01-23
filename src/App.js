import React, { Component } from "react";
import { connect } from "react-redux";
import { changeUserName, changeUserStatus } from "./actions";


class App extends Component {
  handleClick = () => {
    // Dispatch an event
    // Change username in store
    const user = { userName: "Awesome" };
    this.props.changeUserName(user);
  };

  becomeAdmin = () => {
    // Dispatch an event
    // Change username in store
    const user = { userName: "Admin" };
    this.props.changeUserName(user);
  };


  logIn = (param) => {
    // Dispatch an event
    // Change username in store
    const user = {userStatus:"logged_in", userName:"Leon"};
    this.props.changeUserStatus(user);
    this.props.changeUserName(user);

  };

  logOut = (param) => {
    // Dispatch an event
    // Change username in store
    const user = {userStatus:"logged_out", userName:"_____"};
    this.props.changeUserStatus(user);
    this.props.changeUserName(user);
  };
  


//change user status to logged after init
  componentDidMount() {
    this.logIn();
  }

 


  render() {
    return (
      <div>
        Hi {this.props.myUserName} ,
        <br/>
        your status: {this.props.myUserStatus}
        <br/>
        Buttons:

        <button onClick={this.handleClick}>Click Me</button>
        <button onClick={this.becomeAdmin}>Become admin</button>
       
        {/* if the first condition is true, then second will be rendered/true, else third will be rendered/true , 
         eslint does not like it but it is a nice trick*/}
        { this.props.myUserStatus === "logged_in" && <button onClick={this.logOut}>log out</button> ||
        <button onClick={this.logIn}>log in</button> }

      </div>
    );
  }
}




function mapStateToProps(state) {
  // what kind of values do we want to use in current page?
  return {
    myUserName: state.user.userName, //my username 
    myUserStatus: state.user.userStatus
  };
}
//binding store and app together.
export default connect(
  mapStateToProps,//allow passing store value to props
  {
    changeUserName,//action function --- allow firing event to store
    changeUserStatus
  }
)(App);