import { Container, Header, Loader } from 'semantic-ui-react';

import NavBar from '../components/Navbar';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const Home = () => {
    const {loading, data } = useQuery(GET_CHALLENGES);
   const token = Auth.loggedIn() ? Auth.getToken() : null;

    return (
        <main>
            <h1> Welcome, user! </h1>
        </main>
    )
}

export default Home 