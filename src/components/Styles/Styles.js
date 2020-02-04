import styled from 'styled-components';
export const Cover = styled.div`
  background: #ddd;
  border-radius: 0.3rem 0.3rem 0px 0px;
  height: 9rem;
`;

export const Content = styled.div`
  height: 2rem;
  font-size: 0.9rem;

  margin-bottom: 1rem;
  border: 1px solid #eee;
  border-radius: 0px 0px 0.3rem 0.3rem;
  padding: 0rem 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row;

  transition: all ease 2.5s;
  :hover {
    cursor: pointer;
    .full {
      display: flex;
    }
    .org {
      display: none;
    }
  }
`;

export const Name = styled.div`
  font-weight: 600;
`;

export const FullName = styled.div`
  display: none;
  position: absolute;
  z-index: 10;
  border: 1px solid #eee;
  border-radius: 0.3rem;
  padding: 0.2px 0.5rem;
  color: #52aaff;
  font-weight: 600;
  box-shadow: 0.2rem 0.2rem #eee;
  background: #fff;
`;
