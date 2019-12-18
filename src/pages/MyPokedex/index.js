import React from 'react';
import Popup from "reactjs-popup"

import Styles from './styles';
import PokeCard from './../../components/PokeCard'

class MyPokedek extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      openListPoke: false,
    }
  }
  render() {
    return (
      <Styles.Container>
        <Styles.Header>My Pokedex</Styles.Header>
        <Styles.ListCardContainer>
          <PokeCard actionTitle="x"></PokeCard>
          <PokeCard actionTitle="x"></PokeCard>
        </Styles.ListCardContainer>
        <Styles.Footer>
          <Styles.AddButton 
            onClick={() => this.setState({ openListPoke: true})}
          />
        </Styles.Footer>
        <Popup 
          open={this.state.openListPoke}
          onClose={() => this.setState({ openListPoke: false })}
          modal
          contentStyle={{width: "70%", top: "0px", height: "70%", overflow: "scroll", bottom: "100px"}}
        >
          <Styles.PopupContainer>
            <Styles.Search placeholder="Find Pokemon"></Styles.Search>
            <PokeCard style={{width: "95%"}} actionTitle="add"></PokeCard>
            <PokeCard style={{width: "95%"}} actionTitle="add"></PokeCard>
            <PokeCard style={{width: "95%"}} actionTitle="add"></PokeCard>
          </Styles.PopupContainer>
        </Popup>
      </Styles.Container>
    )
  }
}

export default MyPokedek