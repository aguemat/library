import styled from 'styled-components';

export const FieldErrorContainer = styled.div`
  color: #ff0000;
  margin-top: ${(props) => (props.type === 'in' ? '-35px' : '0px')};
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.275rem 0.55rem;
  text-align: right;
  font-size: ${(props) => (props.type === 'in' ? '0.8rem' : '1rem')};
  width: ${(props) => (props.type === 'in' ? 'fit-content' : '100%')};
  position: ${(props) => (props.type === 'in' ? 'absolute' : 'absolute')};
  right: 10px;
`;
