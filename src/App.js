import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout';
import Todo from './components/Todo'

class App extends Component {
  render() {
    return (
      <Layout>
        <div>Test Test</div>
        <Todo />
      </Layout>
    );
  }
}

export default App;
