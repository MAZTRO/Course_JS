import React, { Component } from 'react';
import HighScore from './highScore';
import './css/style.css';

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      overTen: false,
      name: 'User',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick = () => {
    this.setState({count: this.state.count + 1});
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  componentDidUpdate(props, state) {
    if (this.state.count > 10 && this.state.count !== state.count && !this.state.overTen) {
      console.log('Updating over ten');
      this.setState({overTen: true});
    }
  }

  resetCount = (e) => {
    this.setState({
      count: 0,
      overTen: false,
    });
  }

  render() {
    let name = this.state.name;
    let {count} = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Please enter your name:</p>
            <input type='text' value={this.state.name} onChange={this.handleChange} />
          </label>
          <input id="send" type="submit" value="Send" />
        </form>
        <h1 align="center">Hello, {name}</h1>
        <h2>You clicked the buttom  {count} times</h2>
        <HighScore
          overTen={this.state.overTen}
          onReset={this.resetCount}
        />
        <button onClick={(e) => this.handleClick()}>Click me</button>
      </div>
    );
  }
}

export default Application;