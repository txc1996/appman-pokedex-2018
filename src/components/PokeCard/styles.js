import styles from 'styled-components'

const Container = styles.div`
  margin: 10px;
  width: 450px;
  padding: 10px;
  background-color: var(--Metal);
  position: relative;
`

const Image = styles.img`
  float: left;
  margin-right: 20px;
  height: 260px;
`

const Info = styles.div`
  position: relative;
`

const Name = styles.h1`
  text-transform: uppercase;
`

const Progress = styles.progress`
  -webkit-appearance: none;
  appearance: none;
  width: 35%;
  height: 25px;
  position: relative;
  margin-left: 60px;

  &::-webkit-progress-value {
    background: var(--Fire);
    border-radius: 15px;
  }

  &::-webkit-progress-bar {
    background: var(--Metal);
    border-radius: 15px;
    border: 0.5px solid var(--Fire);
  }

  &:before {
    content: "${(props) => props.title}";
    float: left;
    position: absolute;
    left: -60px;
    text-transform: uppercase;
  }
`

const Action = styles.div`
  position: absolute;
  right: 10px;
  top: 10px;
  &:before {
    display: ${(props) => props.display ? "block" : "none"};
    cursor: pointer;
    content: "${(props) => props.actionTitle}";
    color: var(--Fire);
    font-size: 30px;
  }
`

export default {
  Container,
  Image,
  Info,
  Name,
  Progress,
  Action
}