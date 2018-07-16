import React, { PureComponent } from 'react'
import "./CharacterInfo.scss"
export default class CharacterInfo extends PureComponent {
    render() {
        return (
            <div>
                <div className="infoFront">
                    <h2 className="infoTitle">前端工程师</h2>
                    <h1 className="infoName">鳕鱼子</h1>
                    <h3 className="infoEnName">Xue YuZi</h3>
                </div>
                <ul className="infoProp">
                    <li><span className="propTitle">CV</span>小原好美</li>
                    <li><span className="propTitle">SIZE</span>B81/W56/H83</li>
                    <li><span className="propTitle">喜欢的东西</span>冲浪</li>
                </ul>
                <div className="infoDesc">
                海词词典,最权威的学习词典,专业出版描述的英文,描述翻译,描述英语怎么说等详细讲解。海词词典:学习变容易,记忆很深刻。
                </div>
            </div>
        )
    }
}