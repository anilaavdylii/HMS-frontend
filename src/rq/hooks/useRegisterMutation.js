import { useMutation } from 'react-query';
import { register } from '../mutations/Register.mutation';

export const useRegisterMutation = () =>
  useMutation('register', (payload) => register(payload));
