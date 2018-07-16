import React, { PureComponent } from 'react'
import CharacterInfo from './CharacterInfo';
import "./Character.scss"


export default class Character extends PureComponent {
    render() {
        return (
            <div className="characterBG">
                <div className="characterBox">
                    <div className="characterInfo">
                        <CharacterInfo/>
                    </div>
                    <div className="characterImg">
                        img
                    </div>
                </div>
            </div>
        )
    }
}