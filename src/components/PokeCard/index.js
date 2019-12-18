import React from 'react'

import Styles from './styles'
import Stars from './../Stars'

class PokeCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hover: false
    }
  }

  render() {
    return (
      <Styles.Container 
        style={this.props.style}
        onMouseOver={() => this.setState({ hover: true })}
        onMouseOut={() => this.setState({ hover: false })}
      >
        <Styles.Image src="https://images.pokemontcg.io/ex8/98.png"></Styles.Image>
        <Styles.Info>
          <Styles.Name>deoxys ex</Styles.Name>
          <Styles.Progress max="100" value="80" title="hp"></Styles.Progress>
          <Styles.Progress max="100" value="80" title="str"></Styles.Progress>
          <Styles.Progress max="100" value="80" title="weak"></Styles.Progress>
          <Stars number="5"></Stars>
        </Styles.Info>
        <Styles.Action display={this.state.hover} actionTitle={this.props.actionTitle}></Styles.Action>
      </Styles.Container>
    )
  }
}

export default PokeCard