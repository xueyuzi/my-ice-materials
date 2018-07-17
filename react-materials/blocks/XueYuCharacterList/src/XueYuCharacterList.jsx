import React, { PureComponent } from 'react'
import Character from "./Character"


const characters = [
    {
        title: "web前端工程师",
        cnName: "鳕鱼子",
        enName: "xueyu zi",
        hobby: "油炸",
        cv: "朋也有没",
        threeSize: "B25/F23/S12",
        desc: "海词词典,最权威的学习词典,专业出版描述的英文,描述翻译,描述英语怎么说等详细讲解。海词词典:学习变容易,记忆很深刻。",
        img: "http://key.visualarts.gr.jp/summer/common/image/character_image_siroha.png"
    },
    {
        title: "web前端工程师",
        cnName: "鳕鱼子",
        enName: "xueyu zi",
        hobby: "油炸",
        cv: "朋也有没",
        threeSize: "B25/F23/S12",
        desc: "海词词典,最权威的学习词典,专业出版描述的英文,描述翻译,描述英语怎么说等详细讲解。海词词典:学习变容易,记忆很深刻。",
        img: "http://key.visualarts.gr.jp/summer/common/image/character_image_wenders.png"
    }
]
export default class XueYuCharacterList extends PureComponent {

    render() {
        return (
            <div>
                {characters.map((character,i)=><Character data={character} rank={i}/>)}
            </div>
        )
        
    }
}