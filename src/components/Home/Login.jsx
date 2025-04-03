import { LoginForm } from "./Common.styles";

const Login = () => {
    return(
        <>
            <LoginForm>
                <h2>로그인</h2>
                <Input type="text" placeholder="Username" required />
                <Input type="password" placeholder="Password" required />
                <button type="submit">로그인</button>
             </LoginForm>
        
        </>
    );
};
export default Login;