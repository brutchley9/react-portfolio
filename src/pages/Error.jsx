import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops! Link don&apos;t work. :(</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
