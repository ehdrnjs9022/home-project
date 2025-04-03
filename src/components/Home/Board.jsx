import { BoardForm,Heading,Input,Button,Layout } from "./Common.styles";
const Board = () => {
    return(
        <>
   <Layout>
      <BoardForm>
        <Heading>게시판</Heading>
        <Input type="text" placeholder="제목" required />
        <Input type="text" placeholder="내용" required />
        <Button type="submit">게시물 작성</Button>
      </BoardForm>
    </Layout>
  
        </>
    );

};

export default Board;