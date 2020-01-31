import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
// import _Button from '@material-ui/core/Button';

const Form = styled.div`
  max-width: 40rem;
  display: flex;
  flex-flow: column;
  padding: 2rem;
  border: 1px solid rgba(22, 30, 38, 0.1);
  box-shadow: 2px 2px rgba(22, 30, 38, 0.1);
  border-radius: 0.8rem;
  min-width: 20rem;
  position: absolute;
  left: 50%;
  top: 50vh;
  transform: translate(-50%, -50%);
`;

const Button = styled.button`
  padding: 0.8rem 0rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  width: 8rem;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  background: rgba(8, 120, 247, 0.96);
  cursor: pointer;
  outline: none;
  :disabled {
    background: #dddddd !important;
    cursor: not-allowed !important;
    color: white !important;
    :hover {
      transform: none;
    }
  }
  :hover {
    transform: translateY(-2px);
  }
`;

const Space = styled.div`
  margin-top: 2rem;
`;

class SignUp extends React.Component {
  state = {
    nameErr: '',
    emailErr: '',
    passwordErr: '',
    name: '',
    password: '',
    email: '',
  };

  Verify = (type, value) => {
    // console.log(type, value);

    let regex = null;
    switch (type) {
      case 'name':
        regex = /^[A-Za-z ]+$/;
        if (regex.test(value) && value.trim().length > 0) {
          //   console.log('caught name', value);
          this.setState({
            [type + 'Err']: '',
          });
        } else {
          this.setState({
            [type + 'Err']: 'Not a valid Name',
          });
        }
        break;

      case 'email':
        regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // console.log('caught email', regex.test(value));
        if (regex.test(value)) {
          this.setState({
            [type + 'Err']: '',
          });
        } else {
          this.setState({
            [type + 'Err']: 'Not a valid Email',
          });
        }
        break;

      case 'password':
        const regexNum = /^(?=.*\d).{1,}$/;
        const regexSpecial = /^(?=.*\W).{1,}$/;
        const regexCapital = /^(?=.*[A-Z]).{1,}$/;
        const regexLength = /^.{8,64}$/;

        let errorStatus = false;
        let errorMessage = '';

        if (!regexLength.test(value) && !errorStatus) {
          errorMessage = 'Atleast 8 characters';
          errorStatus = true;
        }
        if (!regexNum.test(value) && !errorStatus) {
          errorMessage = 'Atleast 1 number';
          errorStatus = true;
        }
        if (!regexSpecial.test(value) && !errorStatus) {
          errorMessage = 'Atleast 1 special character';
          errorStatus = true;
        }
        if (!regexCapital.test(value) && !errorStatus) {
          errorMessage = 'Atleast 1 capital letter';
          errorStatus = true;
        }

        this.setState({
          [type + 'Err']: errorMessage,
        });
        break;
      default:
        break;
    }
    // console.log(this.state);
  };

  onChangeHandler = e => {
    // console.log(e.target.id);

    this.setState({
      [e.target.id]: e.target.value,
    });
    this.Verify(e.target.id, e.target.value);
  };

  handelSubmit = () => {
    console.log('clicked');
  };

  render() {
    const {
      name,
      password,
      email,
      nameErr,
      emailErr,
      passwordErr,
    } = this.state;

    return (
      <Form>
        <TextField
          error={nameErr.trim().length > 0}
          helperText={nameErr}
          id="name"
          label="Full Name"
          value={name}
          onChange={this.onChangeHandler}
        />

        <Space />
        <TextField
          error={emailErr.trim().length > 0}
          helperText={emailErr}
          id="email"
          label="Email Address"
          value={email}
          onChange={this.onChangeHandler}
        />

        <Space />
        <TextField
          error={passwordErr.trim().length > 0}
          helperText={passwordErr}
          type="password"
          id="password"
          label="Password"
          value={password}
          onChange={this.onChangeHandler}
        />

        <Space />
        <Button
          disabled={
            nameErr.trim().length > 0 ||
            emailErr.trim().length > 0 ||
            passwordErr.trim().length > 0 ||
            name.trim().length === 0 ||
            email.trim().length === 0 ||
            password.trim().length === 0
          }
          onClick={this.handelSubmit}
        >
          Sign Up
        </Button>
      </Form>
    );
  }
}

export default SignUp;
