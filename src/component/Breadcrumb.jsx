import React from 'react'
import {Link} from 'react-router-dom'

class Breadcrumb extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <nav className="breadcrumb is-large" aria-label="breadcrumbs">
                <ul>
                    <li><Link to="/"><span className="icon is-small"><i className="fas fa-home"></i></span><span>首页</span></Link></li>
                    <li className="is-active"><Link to="javascript:;" aria-current="page"><span className="icon is-small"><i className="fas fa-thumbs-up" aria-hidden="true"></i></span><span>{this.props.title}</span></Link></li>
                </ul>
            </nav>
        )
    }
}

export default Breadcrumb