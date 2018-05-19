import axios from 'axios';
import * as React from 'react';
import GoogleLogin from 'react-google-login';
import './App.css';

// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   match
// } from 'react-router-dom'
interface IState {
  JWT_TOKEN:boolean,
  responseGoogle:any
}
class App extends React.Component<{},IState> {
  constructor(props:any){
    super(props);
    this.state={
      JWT_TOKEN: false,
      responseGoogle:null
    }
  }
  public render(){
    return (<GoogleLogin
    clientId={"606784332815-cd050aoejthv585ua64b3a8iovdl2dor.apps.googleusercontent.com"}
    buttonText="Login"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}/>
  )}
  private responseGoogle = (response:any) => {
    axios.post("/auth/google", response);
  }
  // private check = () =>{
  //   this.state.JWT_TOKEN ? this.loggedin():this.signin()
  // }
  // private signin = () => {
  //   return (
  //     <p>You have signed in</p>
  //   )
  // }
  
//   private loggedin= () => {return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <div className="left">
//         <h1>test</h1>
//         </div>
//         <div className="right">
//         <h1>test</h1>
//         </div>
//   </div>
//   )}
}
export default App;
