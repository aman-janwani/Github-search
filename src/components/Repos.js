import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {ListGroup, ListGroupItem , NavLink} from 'reactstrap';
import { Link } from "react-router-dom";

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
            {repos.map(repo => (
                <ListGroupItem key={repo.id}>
                    <a href={repo.html_url}>{repo.name}</a>
                    <div className="text-secondary">{repo.language}</div>
                    <div className="text-secondary">{repo.description}</div>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Repos
