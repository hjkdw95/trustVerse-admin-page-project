import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RiDashboardLine } from 'react-icons/ri';
import styled from 'styled-components';

const ListItem = ({
  title,
  list,
  active,
  activeIndex,
  setActiveIndex,
  idx,
  iconSize,
  hoverBg,
  hoverFontColor,
}) => {
  const history = useHistory();
  const [clickedIdx, setClickedIdx] = useState();

  // const cellStyle = {
  //   backgroundColor: hoverBg,
  //   color: hoverFontColor,
  // };

  // const iconStyle = {
  //   fontSize: `${iconSize}px`,
  // };

  const handleClick = () => {
    setActiveIndex(idx);
    setClickedIdx(null);
    history.push(`/${title}`);
  };

  const handleLink = (e, idx) => {
    setClickedIdx(idx);
    history.push({
      pathname: `/${title}`,
      state: {
        clicked: `${e.target.innerHTML}`,
      },
    });
  };

  return (
    <Li>
      <AccodianWrapper className={active}>
        <FirstMenu onClick={handleClick}>
          <IconWrapper>
            <RiDashboardLine />
          </IconWrapper>
          <Menu>{title}</Menu>
        </FirstMenu>
        <SecondMenu className={idx === activeIndex ? '' : 'closed'}>
          {list?.map((menu, idx) => (
            <li
              onClick={e => handleLink(e, idx)}
              className={clickedIdx === idx ? 'strong' : ''}
            >
              {menu}
            </li>
          ))}
        </SecondMenu>
      </AccodianWrapper>
    </Li>
  );
};

export default ListItem;

const Li = styled.li`
  list-style: none;
`;

const AccodianWrapper = styled.div`
  padding: 1rem 2.5rem 1rem 1rem;

  &:hover {
    cursor: pointer;
    background-color: #091023;
    color: #acb6c4;
  }

  &.active {
    background-color: #091023;
    color: #acb6c4;

    div {
      font-weight: 700;
    }
  }
`;

const FirstMenu = styled.div`
  display: grid;
  grid-template-columns: 2.4rem auto;
  grid-gap: 1.5rem;
  gap: 1.5rem;
  align-items: center;

  &::after {
    position: absolute;
    right: 2rem;
    content: '▸';
  }
`;

const IconWrapper = styled.div`
  font-size: 1.6rem;
`;

const Menu = styled.div`
  font-size: 1.6rem;
`;

const SecondMenu = styled.ul`
  padding-left: 4rem;

  transition: all 1000ms ease-in-out;

  &.closed {
    height: 0;

    li {
      display: none;
    }
  }

  li {
    font-size: 1.4rem;
    padding: 1rem;

    &.strong {
      font-weight: 700;
    }
  }
`;
