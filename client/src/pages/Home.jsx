import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import NavBar from '../components/Navbar';

// import LoginForm from '../components/LoginForm';
// import SignupForm from '../components/SignupForm';

const Home = () => {
    // const {loading, data } = useQuery(GET_CHALLENGES);
   // const token = Auth.loggedIn() ? Auth.getToken() : null;

    return (
        <div style={{ backgroundColor: '#FFF6E5', minHeight: '100vh', padding: '20px' }}>
            <Container>
                <NavBar />
                <Header as='h1' style={{ color: '#333', textAlign: 'center', marginTop: '20px' }}>Welcome, user!</Header>
                {/* Your content goes here */}
            </Container>
        </div>
    );
}

export default Home 