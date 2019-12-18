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

  caculateHP = (input) => {
    if (isNaN(input)) {
      return 0
    }
    return parseInt(input) >= 100 ? 100 : input
  }

  caculateStr = (attacks) => {
    if (!Array.isArray(attacks)) {
      return 0
    }
    const point = attacks.length * 50
    return point >= 100 ? 100 : point
  }

  caculateWeakness = (weaknesses) => {
    if (!Array.isArray(weaknesses)) {
      return 0
    }
    const point = weaknesses.length * 100
    return point === 100 ? 100 : 0
  }

  caculateDamage = (attacks) => {
    if (!Array.isArray(attacks)) {
      return 0
    }
    return  attacks.reduce((total, attack) => {
      const damage = parseInt(attack.damage.replace(/\D+/g, ''))
      return total + (isNaN(damage) ? 0 : damage)
    }, 0)
  }

  caculateHappyness = (hp, damage, weakness) => {
    const point = ((hp / 10) + (damage /10 ) + 10 - (weakness / 100)) / 5
    return point
  }

  render() {
    return (
      <Styles.Container 
        style={this.props.style}
        onMouseOver={() => this.setState({ hover: true })}
        onMouseOut={() => this.setState({ hover: false })}
      >
        <Styles.Image src={this.props.card.imageUrl}></Styles.Image>
        <Styles.Info>
        <Styles.Name>{this.props.card.name}</Styles.Name>
          <Styles.Progress max="100" value={this.caculateHP(this.props.card.hp)} title="hp" />
          <Styles.Progress max="100" value={this.caculateStr(this.props.card.attacks)} title="str"></Styles.Progress>
          <Styles.Progress max="100" value={this.caculateWeakness(this.props.card.weaknesses)} title="weak"></Styles.Progress>
          <Stars number={this.caculateHappyness(
            this.caculateHP(this.props.card.hp),
            this.caculateDamage(this.props.card.attacks),
            this.caculateWeakness(this.props.card.weaknesses)
          )}>
          </Stars>
        </Styles.Info>
        <Styles.Action 
          display={this.state.hover.toString()}
          actionTitle={this.props.actionTitle}
          onClick={this.props.onAction}
        ></Styles.Action>
      </Styles.Container>
    )
  }
}

export default PokeCard