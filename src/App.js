import logo from './logo.svg';
import { Helmet } from "react-helmet";

import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';


function App() {
  return (
    <>
    <Helmet>
        {/* Basic meta tags */}
        <meta charSet="UTF-8" />
        <meta name="description" content="Reserve a table at Little Lemon, the finest Mediterranean cuisine in Chicago." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Protocol */}
        <meta property="og:title" content="Little Lemon Restaurant" />
        <meta property="og:description" content="Reserve your table online and enjoy our delicious Mediterranean dishes." />
        {/* <meta property="og:image" content="https://yourwebsite.com/images/little-lemon-hero.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" /> */}
        <meta property="og:type" content="website" />

        {/* Page title */}
        <title>Little Lemon - Reserve a Table</title>
      </Helmet>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}



export default App;
