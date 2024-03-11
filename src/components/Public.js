import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Monica Cleaning Services!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Sydney, Monica Cleaning Services provides a trained staff
          ready to meet your cleaning needs.
        </p>
        <address className="public__addr">
          Monica Cleaning Services
          <br />
          555 Glenwood Park Drive
          <br />
          Sydney, NSW
          <br />
          <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
        <br />
        <p>Owner: Monica Smith</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
