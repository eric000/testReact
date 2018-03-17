import React from 'react'
import Side from '@component/Side.jsx'

class Main extends React.Component {
    render () {
        return (
            <div className="columns is-variable bd-klmn-columns is-2">
                <div className="column is-3">
                    <div className="bd-notification is-primary has-text-centered">
                    <Side/>
                    </div>
                </div>
                <div className="column is-9">
                    <div className="bd-notification is-info has-text-centered">
                    Main
                    </div>
                </div>
            </div>
        )
    }
}

export default Main