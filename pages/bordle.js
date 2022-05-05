import Default from "../components/default"
import {getGames, getVids} from "../utils/genLinks";
import Link from 'next/link'
import styles from "../styles/bordle.module.css"

import Draggable from 'react-draggable';


export default function bordle(props) {
    const list = props.urls

    function getRandomInt(max) {
        const r = Math.floor(Math.random() * max)
        return r;
    }

    return(
        <Default>
        <div className={styles.back}>what a drag... </div>
                <Draggable>
                <div className={styles.bordle}>
                    <a href={String(list[getRandomInt(list.length)])} target="_blank">bored? </a>
                </div>
            </Draggable>
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
