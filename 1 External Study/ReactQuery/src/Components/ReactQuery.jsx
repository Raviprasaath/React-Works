import { useQuery } from 'react-query'

const dataFetching = async () => {
    const response = await fetch('https://api.github.com/users/Raviprasaath');
    const result = await response.json();
    console.log(result);
    return result;
}

function ReactQuery() {
  const { isLoading, error, data } = useQuery('repoData', dataFetching)

  if (isLoading) {
    return 'Loading...'
  }

  if (error) {
    return 'An error has occurred: ' + error.message
  } 

  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  )
}
export default ReactQuery;