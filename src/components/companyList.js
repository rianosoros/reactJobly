import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import JoblyApi from '../api';
import { Container, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import CompanySearch from './companySearch'; // Import the CompanySearch component

const CompanyList = () => {
    const [companies, setCompanies] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        async function getCompanies() {
            let res = await JoblyApi.getCompanies();
            setCompanies(res);
            setSearchResults(res); // Initialize searchResults with all companies
        }
        getCompanies();
    }, []);

    const handleSearch = async (searchTerm) => {
        console.log('Searching for:', searchTerm);
        // Call the API to search for companies using the searchTerm
        try {
            const searchResults = await JoblyApi.getCompanies(searchTerm);
            setSearchResults(searchResults);
        } catch (error) {
            console.error('Error searching for companies:', error);
        }
    };

    return (
        <Container>
            <h1 className="my-4">Companies</h1>
            <Button href="/"> Back </Button>
            <CompanySearch onSearch={handleSearch} /> 
            {searchResults.map(c => ( 
                <Card key={c.handle} className="my-3">
                    <CardBody>
                        <Link to={`/companies/${c.handle}`} className="text-decoration-none">
                            <CardTitle tag="h5">{c.name}</CardTitle>
                        </Link>
                        <CardText>{c.description}</CardText>
                    </CardBody>
                </Card>
            ))}

        </Container>
    );
};

export default CompanyList;
