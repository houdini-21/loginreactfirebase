import React, { Component, Suspense, lazy  } from "react";

const Signup = React.lazy(() => import("./Signup"));


export default class FormularioSignup extends Component {

  UserRef = React.createRef();
  EmailRef = React.createRef();
  PassRef = React.createRef();

  
  
  signupPost = (e) => {
    e.preventDefault();

    const postSignup = {
      username: this.UserRef.current.value,
      email: this.EmailRef.current.value,
      password: this.PassRef.current.value
    };
    console.log(postSignup);
    this.props.signupPost(postSignup);
  };

  showPass = () => {
    var tipo = document.getElementById("password");
    if(tipo.type === "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
    this.setState({ filled: !this.state.filled });
  }


  render() {
    return (
 <div>
<Suspense fallback={<h1>Loading...</h1>}>
          <Signup />
        </Suspense>
 </div>
    );
  }
}
