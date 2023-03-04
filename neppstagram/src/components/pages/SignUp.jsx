import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signUp } from "../../api/auth";
import { useInputs } from "../../hooks/useInputs";
import Button from "../common/Button";
import Input from "../common/Input";

function SignUp() {
  const [inputs, handleInputs] = useInputs({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success } = await signUp(inputs);

    if (success) {
      navigate("/auth/login");
    }
  };

  console.log(inputs);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h3>회원가입 페이지</h3>
        <InputWrapper>
          <Input
            type="text"
            placeholder="이름을 입력해주세요"
            name="name"
            onChange={handleInputs}
          />
          <Input
            type="text"
            placeholder="이메일을 입력해주세요"
            name="email"
            onChange={handleInputs}
          />
          <Input
            type="text"
            placeholder="비밀번호를 입력해주세요"
            name="password"
            onChange={handleInputs}
          />
        </InputWrapper>
        <BtnWrapper>
          <Button>회원가입</Button>
          <Button
            bgColor="red"
            type="button"
            onClick={() => navigate("/auth/login")}
          >
            취소
          </Button>
        </BtnWrapper>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  padding: 50px 0;
  background-color: #fff;
  text-align: center;
`;

const InputWrapper = styled.div`
  margin: 30px 0 20px;
  input + input {
    margin-top: 4px;
  }
`;

const BtnWrapper = styled.div`
  text-align: center;
  button + button {
    margin-top: 4px;
  }
`;
export default SignUp;
