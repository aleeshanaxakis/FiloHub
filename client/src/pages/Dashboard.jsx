import React from 'react';
import { useQuery } from '@apollo/client';
import { Container, Header, Loader } from 'semantic-ui-react';
import { GET_CHALLENGES } from '../utils/queries';

const Dashboard = () => {
    const { loading, data } = useQuery(GET_CHALLENGES);

    return (
        <Container>
      <Header as="h2">My Challenges</Header>
      {loading ? (
        <Loader active>Loading...</Loader>
      ) : (
        <div>
          {/* Display list of challenges */}
          {data && data.challenges.map(challenge => (
            <div key={challenge._id}>
              <h3>{challenge.title}</h3>
              <p>{challenge.challengeBody}</p>
              <p>Creator: {challenge.creator}</p>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
}

export default Dashboard;