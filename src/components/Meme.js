import React from "react";
import memesData from "../memesData"

export default function Header() {

    let url

    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
    }

    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text" />
                <input type="text" className="form--input" placeholder="Bottom text"/>
                <button className="form--button" onClick={getMemeImage()}>Get a new meme image</button>
            </div>
        </main>
    )
}