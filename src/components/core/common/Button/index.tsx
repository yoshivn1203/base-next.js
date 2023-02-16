import { ButtonPropsStyles } from './styled';
import * as S from './styled';

interface ButtonProps extends ButtonPropsStyles {
  type?: 'primary' | 'success' | 'warning' | 'danger';
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({ children, type = 'primary', ...props }: ButtonProps) => {
  if (type === 'success') {
    return (
      <S.ButtonSuccessDefault {...props}>{children}</S.ButtonSuccessDefault>
    );
  }

  if (type === 'warning') {
    return (
      <S.ButtonPrimaryDefault {...props}>{children}</S.ButtonPrimaryDefault>
    );
  }

  return <S.ButtonPrimaryDefault {...props}>{children}</S.ButtonPrimaryDefault>;
};

export default Button;
