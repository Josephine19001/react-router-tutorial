import { Routes, Route, Link, useParams, Outlet } from "react-router-dom";

function Movie() {
  const { movieId } = useParams();
  const movie = movies.find((movie) => movie.title === movieId);
  return (
    <div>
      <p>Title: {movie.title}</p>
      <p>Year: {movie.year}</p>
    </div>
  );
}

function Movies() {
  return (
    <div>
      <h1>Movies</h1>
      <div style={{ display: "flex" }}>
        <nav>
          {movies.map((movie) => (
            <>
              <Link to={`/movies/${movie.title}`}>{movie.title}</Link> |{" "}
            </>
          ))}
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

function Books() {
  return (
    <div>
      <h1>Books</h1>
    </div>
  );
}

function CommonPageLayout() {
  return (
    <div style={{ backgroundColor: "red", padding: "1rem" }}>
      <Link to="/contactus">Contact us</Link> | {""}{" "}
      <Link to="/privacy">Privacy</Link>
      <Outlet />
    </div>
  );
}

function ContactUs() {
  return (
    <div>
      <p>Contact us here</p>
    </div>
  );
}
function Privacy() {
  return (
    <div>
      <p>We don't have one:/</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Link to="/">
        <h1>React router blog</h1>
      </Link>
      <nav style={{ padding: "1rem 0" }}>
        <Link to="/movies">Movies</Link> | {""}
        <Link to="/books">Books</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Hello there!</h1>} />
        <Route path="movies" element={<Movies />}>
          <Route
            index
            element={
              <div>
                <p>Title: {movies[0].title}</p>
                <p>Year: {movies[0].year}</p>
              </div>
            }
          />
          <Route path=":movieId" element={<Movie />} />
        </Route>
        <Route path="books" element={<Books />} />
        <Route element={<CommonPageLayout />}>
          <Route path="contactus" element={<ContactUs />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
        <Route
          path="*"
          element={<div>Ops! There's no path name like this!!!</div>}
        />
      </Routes>
    </div>
  );
}

const movies = [
  {
    title: "Titanic",
    year: "1998",
  },
  {
    title: "Avatar",
    year: "2009",
  },
  {
    title: "Matrix",
    year: "1999",
  },
];
export default App;
