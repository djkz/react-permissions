import React from 'react';
import PropTypes from 'prop-types'

class Permissions extends React.Component {
  state = {
    rules: {}
  }

  static childContextTypes = {
    _permissions: PropTypes.shape({
      rules: PropTypes.object.isRequired,
      addRule: PropTypes.func.isRequired
    }).isRequired
  }

  getChildContext() {
    return {
      _permissions: {
        rules: this.state.rules,
        addRule: (name, fn) => this.setState((prevState, props) => {
          let rules = Object.assign({}, prevState.rules) 
          rules[name] = fn
          return { rules }
        })
      }
    }
  }

  render() {
    return this.props.children
  }
}

class Permit extends React.Component {
  static contextTypes = {
    _permissions: PropTypes.shape({
      rules: PropTypes.object.isRequired
    }).isRequired
  }

  render() {
    return this.props.children
  }
}

class AddRule extends React.Component {
  static contextTypes = {
    _permissions: PropTypes.shape({
      addRule: PropTypes.func.isRequired
    }).isRequired
  }

  componentWillMount(){
    this.context._permissions.addRule(this.props.name, this.props.condition)
  }

  render(){
    return null;
  }
}

export {Permissions, Permit, AddRule}

