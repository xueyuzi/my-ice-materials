import React, { PureComponent } from 'react'
import "./CharacterInfo.scss"
export default class CharacterInfo extends PureComponent {
    render() {
        const {data} = this.props
        return (
            <div>
                <div className="infoFront">
                    <h2 className="infoTitle">{data.title}</h2>
                    <h1 className="infoName">{data.cnName}</h1>
                    <h3 className="infoEnName">{data.enName}</h3>
                </div>
                <ul className="infoProp">
                    <li><span className="propTitle">CV</span>{data.cv}</li>
                    <li><span className="propTitle">SIZE</span>{data.threeSize}</li>
                    <li><span className="propTitle">喜欢的东西</span>{data.hobby}</li>
                </ul>
                <div className="infoDesc">
                {data.desc}
                </div>
            </div>
        )
    }
}