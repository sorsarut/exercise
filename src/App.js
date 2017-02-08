import React, { Component } from 'react';
import logo from './kmutt_logo.png';
import './App.css';
import './bulma.css'
import {Item} from './item.js';

class App extends Component {
   state = {
    count: 1
  }

  update = (event) =>
  {
    this.setState({count: event.target.value})
  }

  render() 
  {
    var list = [];
    for(var i = 0; i < this.state.count; i++)
    {
        list.push(<Item />);
    }
    return (
        <section className="hero is-info is-large">
    {/* Hero header: will stick at the top */}
    <div className="hero-head">
      <header className="nav">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item">
              <img src={logo} alt="Logo"/>
            </a>
          </div>
          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="nav-right nav-menu">
            <a className="nav-item is-active">
              Home
            </a>
            <a className="nav-item">
              Examples
            </a>
            <a className="nav-item">
              Documentation
            </a>
            <span className="nav-item">
              <a className="button is-info is-inverted">
                <span className="icon">
                  <i className="fa fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </header>
    </div>

    {/*  Hero content: will be in the middle */}
    <div className="hero-body">

        
            <span className="select">
                <select onChange={this.update}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </span>
        

       <div className="columns App-body">
             {list}
        </div>

    </div>

    {/* Hero footer: will stick at the bottom */}
    <div className="hero-foot">
      <nav className="tabs is-boxed is-fullwidth">
        <div className="container">
          <ul>
            <li className="is-active"><a>Overview</a></li>
            <li><a>Modifiers</a></li>
            <li><a>Grid</a></li>
            <li><a>Elements</a></li>
            <li><a>Components</a></li>
            <li><a>Layout</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
    );
  }
}

export default App;