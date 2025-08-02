import React from 'react';
import { useQuery } from '@tanstack/react-query'; 

const ReactQuery1 = () => {
    const {isLoading, data, error } = useQuery('githubData', apiCall);
    function apiCall() {
   return fetch("https://api.github.com/repos/antonfrancisjeejo/flipkart-clone")
   .then((res) =>res.json());
    }
    if(isLoading) {
        return <h1>Loading...</h1>;
    }
    if(error){
        return <h1>An error occured{error}</h1>;
    }
    
  return <>
  <h1>React Query</h1>
  <h1>Repo name:{data.name}</h1>
  <h2>Repo forks:{data.forks}</h2>
<h2>Repo stars:{data.stargazers_count}</h2>
<h2>Repo subscribers:{data.subscribers_count}</h2>
  </>
  
};

export default ReactQuery1;
