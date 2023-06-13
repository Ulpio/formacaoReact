import { ButtonContainer } from "./styles";

const Button= ({label, onClick , id}) => {
    return (
      <ButtonContainer onClick={onClick} type="button" id="">
        {label}
      </ButtonContainer>
    );
  }
  export default Button;
  
  