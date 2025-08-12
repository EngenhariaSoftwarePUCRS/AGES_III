import { useQuery } from '@tanstack/react-query';
import { Link, useParams, useSearchParams } from 'react-router';

function About() {
  const { count } = useParams();
  const [searchParams] =  useSearchParams();
  const c2 = searchParams.get('c2');

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: async() => {
      const response = await fetch(
        'https://api.github.com/repos/tanstack/query'
      );
      return await response.json();
    }
  });

  if (isPending) {
    return 'Loading...';
  }

  if (error) {
    return (
      <p>
        Error: {error.message}
      </p>
    );
  }
  
  return (
    <div>
      <h1>About</h1>
      <p>Path param count: {count}</p>
      <p>Search param 'c2': {c2}</p>
      <Link to={'/'}>App</Link>

      <div>
        <h1>{data.full_name}</h1>
        <p>{data.description}</p>
        <strong>👀 {data.subscribers_count}</strong>{' '}
        <strong>✨ {data.stargazers_count}</strong>{' '}
        <strong>🍴 {data.forks_count}</strong>
        <div>{isFetching ? 'Updating...' : ''}</div>
      </div>
    </div>
  );
}

export default About;
