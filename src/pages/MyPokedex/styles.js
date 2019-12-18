import styles from 'styled-components'

const Container = styles.div``

const Header = styles.h1`
  text-align: center;
`

const Footer = styles.div`
  height: 100px;
  width: 100%;
  background-color: var(--Fire);
  position: absolute;
  bottom: 0;
`

const AddButton = styles.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  background-color: var(--Fire);
  color: var(--Colorless);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  :before {
    content: "+";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 100px;
  }
  left: 50%;
  transform: translate(-50%, 0%);
`

export default {
  Container,
  Header,
  Footer,
  AddButton
}