import {Link} from 'react-router-dom'

const Navbar = ():JSX.Element => {
    return (
        <nav>
            <h1>Holiday Dreams</h1>
            <Link to="/">Home</Link>
        </nav>
    )
}

export default Navbar