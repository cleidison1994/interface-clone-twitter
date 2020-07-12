import React from 'react';
import StickBox from 'react-sticky-box';

import List from '../List';
import FollowSugest from '../FollowSugest';
import News from '../News';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body, } from './styles';

function SideBar() {
  return (

    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no twitter"/>
        <SearchIcon />
      </SearchWrapper>
      <StickBox>
        <Body>
          <List
            title="Talvez voçe curta" 
            elements={[
              <FollowSugest 
                name="Batman"
                nickname="@batman"
              />,
              <FollowSugest 
                name="Bane"
                nickname="@bane"
              />,
              <FollowSugest 
                name="Joker"
                nickname="@joker"
              />,
          ]}
            />

          <List
            title="Acontecimentos" 
            elements={[<News/>,<News/>,<News/>,<News/>,]}
          />
          <List
            title="Acontecimentos" 
            elements={[<News/>,<News/>,<News/>,<News/>,]}
          />
          <List
            title="Acontecimentos" 
            elements={[<News/>,<News/>,<News/>,<News/>,]}
          />
        </Body>
      </StickBox>
      </Container>
    );
}

export default SideBar;