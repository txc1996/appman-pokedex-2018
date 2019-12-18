import React from 'react'

import Styles from './styles'
import Stars from './../Stars'

class PokeCard extends React.Component {
  render() {
    return (
      <Styles.Container>
        <Styles.Image src="https://images.pokemontcg.io/ex8/98.png"></Styles.Image>
        <Styles.Info>
          <Styles.Name>deoxys ex</Styles.Name>
          <Styles.Progress max="100" value="80" title="hp"></Styles.Progress>
          <Styles.Progress max="100" value="80" title="str"></Styles.Progress>
          <Styles.Progress max="100" value="80" title="weak"></Styles.Progress>
          <Stars number="5"></Stars>
        </Styles.Info>
      </Styles.Container>
    )
  }
}

export default PokeCard