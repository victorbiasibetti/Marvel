import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    display: grid;
    grid-template-columns: repeat(4, 2fr);
    grid-gap: 10px;
  }

  header {
    width: 100%;
    justify-content: flex-start;
    button{
      padding: 10px;
      margin-left: 50px;
      margin-top: 20px;
      border-radius: 5px;
      border: none;
      width: 80px;
      background: #069;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      &:hover {
          background: #069fff
        }
    }
  }

  p {
    font-size: 22px;
  }

  textarea {
    margin-top: 20px;
    width: 60%;
    height: 80px;
  }

  button{
      padding: 10px;
      margin-left: 50px;
      margin-top: 20px;
      border-radius: 5px;
      border: none;
      width: 80px;
      background: #069;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      &:hover {
          background: #069fff
        }
    }
  
`;
