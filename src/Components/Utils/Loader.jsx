import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderJSX = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin: 3em auto 0 auto;
  animation: ${spinAnimation} 1s cubic-bezier(0.86, 0.3, 0.3, 0.86) infinite;
`;

const Loader = () => {
  return <LoaderJSX />;
};

export default Loader;
