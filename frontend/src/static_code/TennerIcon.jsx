import { Link } from 'react-router-dom';

export default function TennerIcon () {
    return (
        <Link id="logo-clicked" to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <img id="logo" src="https://gcdnb.pbrd.co/images/aUgY95TlnT6k.png?o=1" alt="tenner logo"></img>
        </Link>
    )
}