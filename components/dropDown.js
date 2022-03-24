import styles from "../styles/blog.module.css"
import Image from "next/image"
import pinnocchio from "../public/pinnocchio.png"
const DropDown = props => {
    return (
        <div className = {styles.post}>

                <span onClick={props.handleClose}>x</span>

                <div className = {styles.quote}><br/>
                <p>"Yields falsehood when preceded by its quotation."</p>
                <p>Yeilds falsehood when preceded by its quotation.</p><br/>
                </div>

                <div>
                So you wanrt to learn to quine, well your in the right place, in fact your halfway there! You just read a The Quine paradox in the quote above, this sentence, created by Willard Van Orman Quine (one of the most influencial logicians of the 20th century) is inspired by the famous liars paradox, "THIS SENTENCE IS FALSE". 
                </div>

                <Image src = {pinnocchio} width={200} height={200} alt="pinnochio"/>

        </div>
    );
};
export default DropDown;
