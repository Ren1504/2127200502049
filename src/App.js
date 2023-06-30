import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import Scroller from './Scroller';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navigation />
      <Scroller />
      <div className="my-5 foot">
  <footer
    className="text-center text-white"
    style={{ backgroundColor: "#f1f1f1" }}
  >
    <div className="container pt-4">
      <section className="mb-4">
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <p>Instagram</p>
        </a>
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <p>Twitter</p>
        </a>
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <p>Gmail</p>
        </a>
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <p>Facebook</p>
        </a>
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <i className="fab fa-github" />
        </a>
      </section>
    </div>
    <div
      className="text-center text-dark p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      © 2023 Copyright:
      <a className="text-dark" href="https://mdbootstrap.com/">
        FastTrain.com
      </a>
    </div>
  </footer>
</div>

    </div>
  );
}

export default App;
