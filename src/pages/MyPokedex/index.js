import React from 'react';
import Styles from './styles';

class MyPokedek extends React.Component {
  render() {
    return (
      <Styles.Container>
        <Styles.Header>My Pokedex</Styles.Header>
        <Styles.Footer>
          <Styles.AddButton/>
        </Styles.Footer>
      </Styles.Container>
    )
  }
}

export default MyPokedek