import React, { PureComponent } from 'react'
import menuConfig from "./menuConfig"
import "./BMHeader.css"
export default class XueYuBMHeader extends PureComponent {
    render() {
        const menuItems = menuConfig.map((d,i) => (
            <li className="menu-item">
                {/* {i%2===0 ? <span>|</span>:<span></span>} */}
                <a href={d.path}>
                    {d.cnName}
                    <br/>
                    {d.enName}
                </a>
                {/* {i%2===0 ? <span>|</span>:<span></span>} */}
            </li>
        ))
        return (
            <div className="menu-box">
                <ul className="menu-item-box">
                    {menuItems}
                </ul>
            </div>)
    }
}