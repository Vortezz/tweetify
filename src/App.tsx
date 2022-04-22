import React from 'react';
import domtoimage from 'dom-to-image';

import dateAndTime from 'date-and-time';
import {IconTextInput} from "./components/TextInput";
import {TextArea} from "./components/TextArea";
import {Button} from "./components/Button";
import {saveAs} from "file-saver";

const base = require("./pictures/base.png");

function renderText(text: string): string {
    const lines = text.split("\n");

    for (let i = 0; i < lines.length; i++) {
        const wordsInLine = lines[i].split(" ");

        for (let j = 0; j < wordsInLine.length; j++) {
            const word = wordsInLine[j];

            if (word.startsWith("@") || word.startsWith("#") || word.startsWith("http")) {
                wordsInLine[j] = `<span class="text-blue-400">${word}</span>`;
            }
        }

        lines[i] = wordsInLine.join(" ");
    }

    return lines.join("<br />");
}

function App() {
    const [image, setImage] = React.useState("https://vortezz.dev/logo.png");
    const [username, setUsername] = React.useState("thevortezz");
    const [displayName, setDisplayName] = React.useState("Vortezz");
    const [content, setContent] = React.useState("Lorem Ipsum Dolor...");
    const [date, setDate] = React.useState(0);
    const [from, setFrom] = React.useState("Vortezz Browser");

    const [verified, setVerified] = React.useState(true);

    const [retweets, setRetweets] = React.useState(0);
    const [likes, setLikes] = React.useState(0);
    const [quotes, setQuotes] = React.useState(0);

    return (<div className={"h-screen w-full bg-vortezz-gray1 font-ubuntu"}>
            <h1 className={"text-vortezz-white text-4xl font-bold text-center py-4"}>MLP Tweet Generator</h1>
            <p className={"text-vortezz-white text-xl font-semibold text-center"}>Ce site a pour but de faire rire
                et non de vous influencer sur un choix de candidat.</p>
            <p className={"text-vortezz-white text-xl font-semibold text-center mb-2"}>Allez voter, c'est important.</p>
            <p className={"text-vortezz-white text-xl font-semibold text-center mb-2"}>Vous pouvez retrouver le code
                source sur <a href={"https://github.com/Vortezz/tweetify"} target={"_blank"}>Github</a></p>
            <div
                className={"select-none relative w-[calc(90%)] max-w-[calc(60rem)] mx-auto text-vortezz-gray2"}>
                <div id={"canvas"} className={"bg-white"}>
                    <div className={"h-full w-full bg-vortezz-white"}/>
                    <img src={base} className={"z-20 relative select-none"}/>
                    <img crossOrigin={"anonymous"} src={"https://cors.vrtz.dev/?url=" + image}
                         className={"z-10 top-[calc(59%)] left-[calc(41%)] absolute h-[calc(7%)] -rotate-4 rounded-full"}/>
                    <p className={"absolute top-[calc(58.15%)] left-[calc(46%)] w-[calc(20%)] -rotate-4 text-[calc(70%)]"}>{displayName} {verified &&
                        <svg className={"text-blue-400 absolute inline-block ml-1 mt-1"} fill={"currentcolor"}
                             width={"10"} height={"10"} viewBox={"0 0 24 24"}>
                            <path
                                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"/>
                        </svg>}
                    </p>
                    <p className={"absolute top-[calc(60.70%)] left-[calc(46%)] w-[calc(20%)] -rotate-4 text-vortezz-gray5 text-[calc(50%)]"}>@{username}</p>
                    <p dangerouslySetInnerHTML={{__html: renderText(content)}}
                       className={"absolute top-[calc(66%)] left-[calc(42%)] w-[calc(20%)] text-[calc(80%)] -rotate-4 leading-4 text-vortezz-gray3"}>

                    </p>
                    <p className={"absolute top-[calc(79%)] left-[calc(41.90%)] w-[calc(20%)] text-[calc(60%)] -rotate-4 leading-4 text-vortezz-gray4"}>
                        {dateAndTime.format(new Date(date), "hh:mm A · DD/MM/YYYY")} · {from}
                    </p>
                    <p className={"absolute top-[calc(82%)] left-[calc(41.90%)] w-[calc(20%)] text-[calc(60%)] -rotate-4 leading-4"}>
                        <span className={"font-bold"}>{retweets}</span> Retweets <span
                        className={"font-bold"}>{quotes}</span> Quote Tweets <span
                        className={"font-bold"}>{likes}</span> Likes</p>
                </div>
            </div>
            <div className={"mx-auto w-[calc(90%)] flex flex-col justify-center"}>
                <Button label={"Download"} size={"large"} onClick={
                    () => {
                        const node = document.getElementById('canvas');

                        domtoimage.toPng(node!)
                            .then(function (dataUrl) {
                                saveAs(dataUrl, "image.png")
                            })
                            .catch(function (error) {
                                console.error('oops, something went wrong!', error);
                            });
                    }
                }/>

                <div className={"w-full flex flex-wrap justify-between"}>
                    <IconTextInput label={"Display Name"} icon={"bx bxs-user"} onChange={(e) => {
                        setDisplayName(e.target.value)
                    }} value={displayName} placeholder={"Vortezz"}/>
                    <IconTextInput label={"Username"} icon={"bx bxs-user"} onChange={(e) => {
                        setUsername(e.target.value)
                    }} value={username} placeholder={"@thevortezz"}/>
                    <IconTextInput label={"Icon"} icon={"bx bxs-image"} onChange={(e) => {
                        setImage(e.target.value)
                    }} value={image} placeholder={"https://vortezz.dev/logo.png"}/>
                    <div className={"text-vortezz-white my-auto w-[calc(90%)] max-w-[calc(25rem)] mx-auto"}>
                        <input type={"checkbox"}
                               className={"mr-1 mx-auto ring-vortezz-purple checked:text-vortezz-purple"}
                               onChange={(e) => {
                                   setVerified(e.target.checked);
                               }} checked={verified}/> Verified
                    </div>
                </div>

                <TextArea label={"Text"} onChange={(e) => {
                    setContent(e.target.value)
                }} value={content} placeholder={"Lorem Ipsum Dolor..."}/>

                <div className={"w-full flex flex-wrap justify-between"}>
                    <IconTextInput label={"Timestamp"} icon={"bx bxs-user"} onChange={(e) => {
                        setDate(parseInt(e.target.value))
                    }} value={date.toString()} placeholder={"0"} type={"number"}/>
                    <IconTextInput label={"Source"} icon={"bx bxs-inbox"} onChange={(e) => {
                        setFrom(e.target.value)
                    }} value={from} placeholder={"Vortezz Browser"}/>
                </div>

                <div className={"w-full flex flex-wrap justify-between"}>
                    <IconTextInput label={"Retweets"} icon={"bx bxs-user"} onChange={(e) => {
                        setRetweets(parseInt(e.target.value))
                    }} value={retweets.toString()} placeholder={"0"} type={"number"}/>
                    <IconTextInput label={"Quote Tweets"} icon={"bx bxs-user"} onChange={(e) => {
                        setQuotes(parseInt(e.target.value))
                    }} value={quotes.toString()} placeholder={"0"} type={"number"}/>
                    <IconTextInput label={"Likes"} icon={"bx bxs-image"} onChange={(e) => {
                        setLikes(parseInt(e.target.value))
                    }} value={likes.toString()} placeholder={"0"} type={"number"}/>
                </div>
            </div>
            <div className={"bg-vortezz-purple"}></div>
        </div>
    );
}

export default App;
