import React, { Component } from 'react';
import HomeUnauthed from './HomeUnauthed';
import HomeAuthed from './HomeAuthed';

class Home extends Component {
  loadComponent = () => {
    let component = '';
    if (this.props.authed) {
      component = <HomeAuthed />;
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
