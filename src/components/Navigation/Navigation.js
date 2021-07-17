import { Link } from 'react-router-dom';
// import styles from './Navigation.module.css';

const Navigation = () => (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/authors">Authors</Link>
        <Link to="/books">Books</Link>
    </nav>
);

export default Navigation;
