import React from 'react';
import Popup from "reactjs-popup"

import Styles from './styles';
import PokeCard from './../../components/PokeCard'

class MyPokedek extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      openListPoke: false,
      myListPoke: [],
      searchPoke: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3030/api/cards")
    .then(response => response.json())
    .then(cards => this.setState({ searchPoke: cards.cards }))
  }

  removeCard = (card) => {
    const newSearchList = [...this.state.searchPoke]
    newSearchList.push(card)
    this.setState({
      myListPoke: [...this.state.myListPoke].filter((item) => {
        return item.id !== card.id
      }),
      searchPoke: newSearchList
    })
  }

  addCard = (card) => {
    const myNewPokeList = [...this.state.myListPoke]
    myNewPokeList.push(card)
    this.setState({
      myListPoke: myNewPokeList,
      searchPoke: [...this.state.searchPoke].filter((item) => {
        return item.id !== card.id
      })
    })
  }

  renderMyListPoke = () => {
    return this.state.myListPoke.map((card) => (
      <PokeCard
        actionTitle="x"
        key={card.id}
        card={card}
        onAction={() => this.removeCard(card)}
      ></PokeCard>
    ))
  }

  renderSearchPoke = () => {
    return this.state.searchPoke.map((card) => (
      <PokeCard
        style={{width: "95%"}}
        actionTitle="add"
        card={card}
        key={card.id}
        onAction={() => this.addCard(card)}/>
    ))
  }

  render() {
    return (
      <Styles.Container>
        <Styles.Header>My Pokedex</Styles.Header>
        <Styles.ListCardContainer>
          {this.renderMyListPoke()}
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
            {this.renderSearchPoke()}
          </Styles.PopupContainer>
        </Popup>
      </Styles.Container>
    )
  }
}

export default MyPokedek