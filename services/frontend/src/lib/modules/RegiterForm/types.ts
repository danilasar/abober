export interface FormState {
  name: string;
  surname: string;
  email: string;
  role: 'admin' | 'user';
  password: string;
  confirmPassword: string;
}

export interface FormErrors {
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}
