import React, { Component, Suspense, lazy } from "react";

const Signin = React.lazy(() => import("./Signin"));

export default class FormularioSignin extends Component {
  EmailRef = React.createRef();
  PassRef = React.createRef();
  

  signinPost = e => {
    e.preventDefault();

    const postSignin = {
      email: this.EmailRef.current.value,
      pass: this.PassRef.current.value
    };
    console.log(postSignin);

    this.props.signinPost(postSignin);
  };

  showPass = () => {
    var tipo = document.getElementById("password");
    if (tipo.type === "password") {
      tipo.type = "text";
    } else {
      tipo.type = "password";
    }
    this.setState({ filled: !this.state.filled });
  };

  handleCheckboxChange = () => {
    alert("creo que la asustaste");
  };
  render() {
    return (
      <div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Signin />
        </Suspense>
      </div>
    );
  }
}
