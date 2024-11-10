export interface ProfileProps {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface FormState {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
}
