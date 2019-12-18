import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(2,0,36);
  background: linear-gradient(37deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(90,191,212,1) 45%, rgba(39,204,237,1) 58%);
`;

export const Box = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgb(240, 240, 240) 0px 0px 8px;
`;