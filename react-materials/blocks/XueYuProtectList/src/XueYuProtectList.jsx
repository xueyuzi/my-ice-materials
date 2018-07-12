// 产品列表展示
// TODO:等多了可加分页

import React, { Component } from "react";
export default class XueYuProtectList extends Component {

    state = {
        protects: [
            {
                img: "http://key.visualarts.gr.jp/images/banner_summer2.jpg",
                desc: "Summer Pockets",
                url:"http://key.visualarts.gr.jp/summer/"
            },
            {
                img: "http://key.visualarts.gr.jp/images/banner_hikikomori.jpg",
                desc: "Hikikomori song",
                url:"http://key.visualarts.gr.jp/summer/"
            }
        ]
    }
    render() {
        var { protects } = this.state;
        var protectItem = protects.map(p => (
            <a href={p.url}>
                <li><img style={styles.protectItem} src={p.img} alt={p.desc} /></li>
            </a>
        ))

        return (
            <ul>
                {protectItem}
            </ul>
        )
    }
}

var styles = {
    protectItem:{
        width:"100%"
    }
}