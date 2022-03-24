import Navbar from "../components/navbar"
import Header from "../components/header"

export default function Default(props) {
    return (
        <div>
            <Header />
            <Navbar />
            {props.children}
        </div>
    )
}
