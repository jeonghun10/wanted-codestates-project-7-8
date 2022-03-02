import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';


const spin = keyframes`
  to {
    transform:rotate(360deg);
  }
`;
const Text = styled.div({
  width: '80px',
  margin: '0 auto',
  marginTop: '20em',
  fontSize: '15px',
  textAlign: 'center',
  color: `gray`,
});

const Container = styled.div({
  width: '15em',
  margin: '0 auto',
  marginTop: '2em',
});

const LoadingSpinner = styled.div({
  width:'2em',
  height:'2em',
  border:'7px solid #eee',
  borderRadius:'2em',
  borderTopColor:'#3FC176',
  animation:`${spin} 1s linear infinite`,
  margin:'0 auto'
});

const Loading = () => {
  return (
    <>
      <Text>
        로딩중
      </Text>
      <Container>
        <LoadingSpinner/>
      </Container>
    </>
  );
}

export default Loading