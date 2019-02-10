
import React, {
  Component
} from 'react';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      label: "",
      l_color: "",
      signin: false,
      signedin: false,
      emailValue: '',
      passwordValue: '',
      topicBox: null,
      payloadBox: null
    };

    this.updateInputValue = this.updateInputValue.bind(this);
    this.updatePasswordValue = this.updatePasswordValue.bind(this);
    this.handleEmailValid = this.handleEmailValid.bind(this);
    this.loginValidate =  this.loginValidate.bind(this);
    this.changeToLogin =  this.changeToLogin.bind(this);
    this.changeToSignUp =  this.changeToSignUp.bind(this);
  }

  loginValidate({ target }) {

  }

  changeToLogin() {
    this.setState({
      signin: false,
      // signedin: true
    });
  }

  changeToSignUp() {

    this.setState({
      signin: true
    });
  }


  updateInputValue(evt) {
   this.setState({
     emailValue: evt.target.value
   });
 }

 updatePasswordValue(evt) {
  this.setState({
    passwordValue: evt.target.value
  });
}

  handleEmailValid({ target }) {
    if (target.value === '') {
      this.setState({
        label: ""
      });
      return
    }
    if (!target.value.includes('@'))  {
      this.setState({
        l_color: "textColorRed",
        label: `${target.value}, is valid not email `
      });
    } else {
      this.setState({
        l_color: "textColorGreen",
        label: `${target.value}, is valid email `
      });
    }
  }

  render() {
    return (
      <div className="App">
      { this.state.signedin ? <ChatBox /> :
        this.state.signin ? <SignUp loadSignUp={this.changeToSignUp} loadLogin={this.changeToLogin} /> : <LogIn loadSignUp={this.changeToSignUp} loadLogin={this.changeToLogin} />
      }
      </div>
    );
  }
}

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      label: "",
      btn_signup: "btn3",
      l_color: "",
    };
    this.signUp =  this.signUp.bind(this);
    this.loginPageLoad =  this.loginPageLoad.bind(this);
    this.validatePassword =  this.validatePassword.bind(this);
  }



  signUp() {
    alert(this.state.emailValue +"  "+this.state.passwordValue)
    window.sessionStorage.setItem("password", this.state.emailValue)
    window.sessionStorage.setItem("email", this.state.passwordValue)
    this.props.loadSignUp()
  }

  loginPageLoad() {
    this.props.loadLogin()
  }

  validatePassword(e) {
    if (this.state.passwordValue == e.target.value || e.target.value.length == 0) {
      this.state.text = ''
      this.state.btn_signup = 'btn2'
    } else {
      this.state.l_color = "textColorRed"
      this.state.text = 'password mismatch'
    }
  }


  render() {
    return (
      <div>
        <form >
          <div className="box">
            <h1>Sign Up</h1>
            <label className={this.state.l_color} id='email_message' > { this.state.label } </ label>

            <input type="password" placeholder="password" id="password"  className="email" />
            <input value={this.state.emailValue} onBlur={ this.handleEmailValid } onChange={evt => this.updateInputValue(evt)}  placeholder="email" id="email" className="email"/>
            <input value={this.state.passwordValue} onChange={evt => this.updatePasswordValue(evt)} type="password" placeholder="password" id="password"  className="email"  />

            <input onBlur={ this.validatePassword } type="password" placeholder="confirm password" id="confirm_password"  className="email" />
            <label className={this.state.l_color} id='password_message' > { this.state.text } </ label>

            <a align='center' href=""><div className= {this.state.btn_signup} onClick={ this.signUp } >Sign Up</div></a>
            <a href=""><div className= {this.state.btn_signup} onClick={ this.loginPageLoad }> <u> Sign In </u> </div></a>
          </div>
        </form>
      </div>
    )
  }
}


class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      label: "",
      l_color: "",
    };
    // window.sessionStorage.setItem("user_name", "");
    // window.sessionStorage.setItem("user_password", "");
    // window.sessionStorage.setItem("user_confirm_password", "");
    // window.sessionStorage.getItem("user_password", "");

    this.signUp =  this.signUp.bind(this);
    this.loginPageLoad =  this.loginPageLoad.bind(this);
    this.loginValidate =  this.loginValidate.bind(this);
  }


  signUp() {
    this.props.loadSignUp()
  }

  loginPageLoad() {
    this.props.loadLogin()
  }

  loginValidate() {

  }

  render() {
    return (
      <div>
      <form >
        <div className="box">
          <h1>Log In</h1>
          <input placeholder="email" id="email" onChange={ this.props.emailValidate } onBlur={ this.handleEmailValid } className="email" />
          <label className={this.state.l_color} id='email_message' > { this.state.label } </ label>
          <input type="password" placeholder="password" id="password"  className="email" />
          <a href="#"><div className="btn" onClick={ this.loginPageLoad }>Sign In</div></a>
          <a href="#"><div id="btn2" onClick={ this.signUp } >Sign Up</div></a>
        </div>
        <p>Forgot your password? <u>Click Here!</u></p>
      </form>

      </div>
    )
  }
}

class ChatBox extends Component {
  render() {
    return (
      <div className="chat-box">
          <div className="container">
            <img src="../assets/images/dad_0001.png" alt="Avatar" />
            <p>Sweet! So, what do you wanna do today?</p>
            <span className="time-right"> 11:02 </span>
          </div>

          <div className="container darker">
            <img src="/assets/images/samantha_001.jpg" alt="Avatar" className="right" />
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
      </div>
    )
  }
}


export default App;
