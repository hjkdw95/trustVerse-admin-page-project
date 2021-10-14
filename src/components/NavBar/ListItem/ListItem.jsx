import React from 'react';
import styled from 'styled-components';

const ListItem = ({ item }) => {
  return <Li>{item}</Li>;
};

export default ListItem;

const Li = styled.li`
  padding: 1rem 2.5rem;
  font-size: 1.6rem;
  font-weight: 300;
`;
