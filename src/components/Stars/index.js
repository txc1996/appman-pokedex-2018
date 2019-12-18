import React from 'react'

import CutePng from './../../cute.png'
import Styles from './styles'

const Stars = (props) => (
  <Styles.Container>
    {Array.from(Array(parseInt(props.number)).keys()).map((value) => (<Styles.Star key={value} src={CutePng} />))}
  </Styles.Container>
)

export default Stars