import styled from 'styled-components';

export const Container = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #069;
  
  border-radius: 5px;
  padding: 5px;

  h3 {
    font-size: 18px;
    justify-content: center;
    color: #fff;
    padding: 5px;
  }

  img {
    padding: 5px;
    size: 150px;
  }

  button {
    padding: 5px;
    font-size: 16px;
    background: #fff;
    font-family: Arial, Helvetica, sans-serif;
    margin: 5px;
    border: none;
    border-radius: 5px;

    &:hover {
      background: #069fff
    }
    
  }
  
`;
