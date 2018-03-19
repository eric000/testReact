import React from 'react'
import { Link, NavLink } from 'react-router-dom'

class Side extends React.Component {
    render() {
        return (
            <aside className="menu">
                <ul className="menu-list">
                    <li><NavLink exact activeClassName="is-active" to="/">首页</NavLink></li>
                </ul>
                <p className="menu-label">
                <span className="icon"><i className="fas fa-lg fa-chess-pawn"></i></span>商品
                </p>
                <ul className="menu-list">
                    <li><NavLink activeClassName="is-active" to="/product">商品管理</NavLink></li>
                    <li><NavLink activeClassName="is-active" to="/category">品类管理</NavLink></li>
                </ul>
                <p className="menu-label">
                <span className="icon"><i className="fas fa-chess-knight fa-lg "></i></span>订单
                </p>
                <ul className="menu-list">
                    <li><NavLink activeClassName="is-active" to="/order">订单管理</NavLink></li>
                </ul>
                <p className="menu-label">
                    <span className="icon"><i className="fas fa-lg fa-chess"></i></span> 用户
                </p>
                <ul className="menu-list">
                    <li><NavLink activeClassName="is-active" to="/user">用户管理</NavLink></li>
                </ul>
            </aside>
        )
    }
}

export default Side