import React, { PureComponent } from 'react'
import CharacterInfo from './CharacterInfo';
import "./Character.scss"


export default class Character extends PureComponent {

    render() {
        const { data, rank } = this.props;
        return (
            <div className="characterBG">

                {
                    rank % 2 === 0 ?
                        <div className="characterBox">
                            <div className="characterInfo">
                                <CharacterInfo data={data} />
                            </div>
                            <div className="characterImg">
                                <img src={data.img} />
                            </div>
                        </div>
                        :
                        <div className="characterBox">
                            <div className="characterImg">
                                <img src={data.img} />
                            </div>
                            <div className="characterInfo">
                                <CharacterInfo data={data} />
                            </div>
                        </div>
                }

            </div>
        )
    }
}