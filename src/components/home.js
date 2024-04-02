import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "reactstrap";

function Home() {
    const currentUser = localStorage.getItem("username");
    
    return (
        <div className="Homepage">
            <Container className="text-center">
                <h1 className="mb-4 font-weight-bold">Jobly</h1>
                {currentUser ? (
                    <h2 className="mb-4">
                        Welcome Back, {localStorage.getItem("username")}!
                    </h2>
                ) : (
                    <p className="lead mb-4">
                        All the jobs in one, convenient place.
                    </p>
                )}
                <div className="d-flex justify-content-center">
                    {currentUser ? (
                        <div className="d-flex">
                            <Button tag={Link} to={`/profile/${currentUser}`} color="primary" className="font-weight-bold mr-3">
                                Profile
                            </Button>
                            <Button tag={Link} to="/companies" color="primary" className="font-weight-bold mr-3">
                                Companies
                            </Button>
                            <Button tag={Link} to="/jobs" color="primary" className="font-weight-bold">
                                Jobs
                            </Button>
                        </div>
                    ) : (
                        <Button tag={Link} to="/login" color="primary" className="font-weight-bold mr-3">
                            Log in
                        </Button>
                    )}
                    {!currentUser && (
                        <Button tag={Link} to="/signup" color="primary" className="font-weight-bold">
                            Sign up
                        </Button>
                    )}
                </div>
            </Container>
        </div>
    );
}

export default Home;
