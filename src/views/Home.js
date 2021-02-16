import React, { Component } from 'react';
import HomeUnauthed from './HomeUnauthed';

class Home extends Component {
  loadComponent = () => {
    let component = '';
    if (this.props.authed) {
      component = <div>
      <h1>Home Authed</h1>
    </div>;
    } else {
      component = <HomeUnauthed />;
    }
    return component;
  };

  render() {
    return (
      this.loadComponent()
    );
  }
}

export default Home;
