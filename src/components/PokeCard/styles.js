import styles from 'styled-components'

const Container = styles.div`
  margin: 10px;
  width: 450px;
  padding: 10px;
  background-color: var(--Metal);
`

const Image = styles.img`
  float: left;
  margin-right: 20px;
  height: 260px;
`

const Info = styles.div`
`

const Name = styles.h1`
  text-transform: uppercase;
`

const Progress = styles.progress`
  -webkit-appearance: none;
  appearance: none;
  width: 150px;
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

export default {
  Container,
  Image,
  Info,
  Name,
  Progress
}