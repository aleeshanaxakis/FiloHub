import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { GET_CHALLENGES } from '../utils/queries';
import { GET_CHALLENGE } from '../utils/queries';
import { DELETE_CHALLENGE } from '../utils/mutations';
import Auth from '../utils/auth';