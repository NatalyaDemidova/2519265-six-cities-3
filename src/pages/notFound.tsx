import { Link } from 'react-router-dom';

export default function NotFound(): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <div className="container">
        <h1>404 Not Found</h1>
        <div>
          <Link to="/">Вернуться на главную</Link>
        </div>
      </div>
    </main>
  );
}
