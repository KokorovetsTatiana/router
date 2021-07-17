import { Switch, Route } from "react-router-dom";
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
import BooksView from './views/BooksView';
import BookDetailsView from './views/BookDetailsView';

export default function App() {
  return (
    <Container>
      <AppBar />
    </Container>
  )
}
