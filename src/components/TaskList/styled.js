import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  margin-top: -30rem;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  background-color: #13678A;
  align-items: center;
  border-radius: 10px;
`;
export const Title = styled.h1`
  width: 100%;
  text-align: center;
  justify-content: center;
`;
export const InputBox = styled.div`
  width: 40%;
  button {
    height: 2rem;
    width: 3rem;
    margin: 0 0.3rem;
    border: none;
    border-radius: 5px;
    background-color: #DAFDBA;
    color: #146551;
    font-size: 1rem;
    :hover {
      filter: brightness(1.5);
    }
  }
`;
export const Input = styled.input`
  width: 80%;
  height: 2rem;
  background-color: #DAFDBA;
  border: none;
  outline: none;
  border-radius: 5px;
  ::placeholder {
    padding: 0 1.5rem;
    color: #146551;
    font-size: 1rem;
  }
  :hover {
    filter: brightness(1.5);
  }
  :focus {
    filter: brightness(1.5);
  }
`;
export const Main = styled.main`
  width: 100%;
`;
export const Ul = styled.ul`
  width: 90%;
  li {
    background-color: #DAFDBA;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    :hover {
      filter: brightness(1.5);
    }
  }
`;
