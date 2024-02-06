import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Container, Header, Loader } from 'semantic-ui-react';
import { GET_CHALLENGE } from '../utils/queries';

const ChallengePage = () => {
    const { challengeId } = useParams();
    const { loading, data } = useQuery(GET_CHALLENGE, {
      variables: { challengeId }
    });
  
    return (
      <Container>
        {loading ? (
          <Loader active>Loading...</Loader>
        ) : (
          <div>
            <Header as="h2">{data.challenge.title}</Header>
            <p>{data.challenge.challengeBody}</p>
            <p>Creator: {data.challenge.creator}</p>
          </div>
        )}
      </Container>
    );
  }
  
  export default ChallengePage;