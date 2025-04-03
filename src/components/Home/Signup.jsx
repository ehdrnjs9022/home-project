import { SignupForm,Heading,Input,Button,Layout } from "./Common.styles";
const Signup = () =>{
    return(
        <>
    <Layout>
      <SignupForm>
        <Heading>회원가입</Heading>
        <Input type="email" placeholder="이메일" required />
        <Input type="password" placeholder="비밀번호" required />
        <Input type="password" placeholder="비밀번호 확인" required />
        <Button type="submit">회원가입</Button>
      </SignupForm>
    </Layout>

        </>
    );
};
export default Signup;