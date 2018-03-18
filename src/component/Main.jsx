import React from 'react'
import Side from '@component/Side.jsx'
import Breadcrumb from '@component/Breadcrumb.jsx'

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
                        <Breadcrumb title="面包屑好看？"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main