import React from 'react'
import {Link} from 'react-router-dom'

class NavHeader extends React.Component{
    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
                    </Link>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                Right
                            </a>
                            <div className="navbar-dropdown is-right">
                                <a className="navbar-item">
                                    Overview
                                </a>
                                <hr className="navbar-divider"/>
                                <div className="navbar-item">
                                    Version 0.6.2
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavHeader