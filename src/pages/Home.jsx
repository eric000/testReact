import React from 'react'
import NavHeader from '@component/NavHeader.jsx'
import Main from '@component/Main.jsx'
import Footer from '@component/Footer.jsx'

class Home extends React.Component{
    constructor (props) {
        super(props)
    }
    render() {
        return (
            <div>
                <NavHeader/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}
 export default Home