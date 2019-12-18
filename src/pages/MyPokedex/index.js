import React from 'react';

import Styles from './styles';
import PokeCard from './../../components/PokeCard'

class MyPokedek extends React.Component {
  render() {
    return (
      <Styles.Container>
        <Styles.Header>My Pokedex</Styles.Header>
        <Styles.ListCardContainer>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
        </Styles.ListCardContainer>
        <Styles.Footer>
          <Styles.AddButton />
        </Styles.Footer>
      </Styles.Container>
    )
  }
}

export default MyPokedek