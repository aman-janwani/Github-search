import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {ListGroup, ListGroupItem } from 'reactstrap';

const Repos = ({repos_url}) => {
    const [repos, setRepos] = useState([]);

    const fetchRepos = async () => {
        const {data} = await Axios.get(repos_url)
        setRepos(data)
    }

    useEffect(() => {
        fetchRepos()
    }, [repos_url])

    return (
        <ListGroup className="repos">
            {repos.map((repo,index) => (
                <ListGroupItem key={repo.id}>
                    <span>{index} :- </span><a className="a" href={repo.html_url}>{repo.name}</a>
                    <div className="text-secondary">{repo.language}</div>
                    <div className="text-secondary">{repo.description}</div>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Repos
