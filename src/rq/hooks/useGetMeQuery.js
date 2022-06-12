import { useQuery } from 'react-query';
import { fetchMe } from '../query/Me.query';

export const useGetMeQuery = () => useQuery('me', fetchMe);
