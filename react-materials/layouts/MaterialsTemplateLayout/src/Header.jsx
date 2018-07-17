import React, { PureComponent } from 'react'
import menuConfig from "./menuConfig"

export default class Header extends PureComponent {
    render() {
        const menuItems = menuConfig.map(d => (
            <li>
                <a href={d.path}>
                    {d.name}
                </a>
            </li>
        ))
        return (
            <div>
                <ul>
                    {menuItems}
                </ul>
            </div>)
    }
}