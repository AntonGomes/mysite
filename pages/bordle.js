import Default from "../components/default"
import {getGames, getVids} from "../utils/genLinks";
import Link from 'next/link'
import styles from "../styles/bordle.module.css"
import {dragElement, dragMouseDown, elementDrag, closeDragElement} from "../utils/drag"
import {useEffect} from 'react'



export default function bordle(props) {
    const list = props.urls

    useEffect(() => {
        //dragElement(document.getElementById("bord"));

    })

    function getRandomInt(max) {
        const r = Math.floor(Math.random() * max)
        return r;
    }


    function dragElement(elmnt) {
    const ps1 = 0, pos2 = 0, pos3=0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove= elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }

    return(
        <Default>
        <div id={styles["bord"]}>
        <div id={styles["bordHead"]}>
        <a href={String(list[getRandomInt(list.length)])} target="_blank">bored?</a>
        </div>
        </div>
        </Default>
    )
}

export async function getStaticProps({params}) {
    const games = await getGames(); 
    const vids = await getVids();
    const arr = games.concat(vids)
    return {
        props: {
            urls: arr
        }
    }
}
