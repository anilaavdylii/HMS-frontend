import { useMutation } from 'react-query';
import { login } from '../mutations/Login.mutation';

export const useLoginMutation = () =>
  useMutation('login', (payload) => login(payload));
