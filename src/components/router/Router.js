import React, {Component} from 'react'

const getCurrentPath = () => {
  const path = document.location.pathname
  return path.substring(path.lastIndexOf('/'))
}

export class Router extends Component {
  state = {
    route: getCurrentPath()
  }

  handleLinkClick = (route) => {
    this.setState({route})
    history.pushState(null, '', route)
  }

  // By adding childContextTypes and getChildContext
  // to Router, React passes the information down automatically
  // and any component in the subtree can access it by definding contextTypes
  static childContextTypes = {
    route: React.PropTypes.string,
    linkHandler: React.PropTypes.func
  }

  getChildContext() {
    return {
      route: this.state.route,
      linkHandler: this.handleLinkClick
    }
  }

  render () {
    return <div>{this.props.children}</div>
  }
}
