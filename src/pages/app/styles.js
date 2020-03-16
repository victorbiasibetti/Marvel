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

  aside {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    
    div {
      box-sizing: 0;
      background: #069;
      color: #fff;
      border-radius: 10px;
      padding: 5px;
      font-weight: bold;
      &:hover {
          background: #069fff
        }
    }
  }

  header {
    width: 100%;
    
    div {
      justify-content: center;
      align-items: center;
      display: flex;

      input{
        margin: 5px;
        height: 30px;
        width: 70%;
        margin-left: 10px;
        border-radius:5px;
        background: #ccc;
        color: #222;
        font-size: 20px;
        border: none;

      }

      button {
        height: 35px;
        width: 100px;
        border-radius: 5px;
        background: #069;
        color: #fff;
        font-weight: bold;
        font-size: 16px;
        border: none;

        &:hover {
          background: #069fff
        }
        
      }

    }
  }

`;
