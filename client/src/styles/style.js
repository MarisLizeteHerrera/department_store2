import styled from 'styled-components';
import { List, Container, Segment, Header } from 'semantic-ui-react'


const ButtonLink = styled.a`
  float: right;
  padding: 10px 30px;
  border-radius: 10px;
  color: ${ props => props.theme.fg } !important;
  background-color: ${ props => props.theme.bg };
`