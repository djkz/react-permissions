import React from 'react';
import PropTypes from 'prop-types'

class Permissions extends React.Component {
  state = {
    result: null,
    loading: false,
    loaded: false
  }

  static childContextTypes = {
    _data_loader: PropTypes.shape({
      onSubmit: PropTypes.func.isRequired,
      loading: PropTypes.bool.isRequired,
      loaded: PropTypes.bool.isRequired,
      result: PropTypes.any
    }).isRequired
  }

  getChildContext() {
    return {
      _data_loader: {
        onSubmit: (val) => {

          this.setState({loading: true})
          setTimeout( () => {
            this.setState({loading: false, loaded: true, result: val });
          },
            2000);
        },
        loading: this.state.loading,
        loaded: this.state.loaded,
        result: this.state.result
      }
    }
  }

  render() {
    const { render, component:Component } = this.props

    if (render) {
      return render( this.state.loading, this.state.result )
    } else if (Component) {
      return <Component result={this.state.result}/>
      } else {
        return null
      }
  }
}

class Permit extends React.Component {
  static contextTypes = {
    _data_loader: PropTypes.shape({
      onSubmit: PropTypes.func.isRequired,
      loading: PropTypes.bool.isRequired
    }).isRequired
  }

  render() {
    return this.props.children( this.context._data_loader.onSubmit )
  }
}

class AddRule extends React.Component {

  render(){
    return null;
  }
}

export {Permissions, Permit, AddRule}

