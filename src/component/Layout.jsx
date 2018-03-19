import React from 'react'
import NavHeader from '@component/NavHeader.jsx'
import Footer from '@component/Footer.jsx'
import Side from '@component/Side.jsx'

class Layout extends React.Component{
    render() {
        return (
            <div>
                <NavHeader/>
                <div className="columns is-variable bd-klmn-columns is-2">
                    <div className="column is-3">
                        <div className="bd-notification is-primary has-text-centered">
                            <Side/>
                        </div>
                    </div>
                    <div className="column is-9">
                        <div className="bd-notification is-info has-text-centered">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Layout