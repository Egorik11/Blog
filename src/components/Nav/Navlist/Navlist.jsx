import {styled} from "styled-components"

const Ul = styled.ul`
  width: 307px;
  display: ${(props => props.menu ? 'block': 'flex')};
  justify-content: space-between;
  align-items: center;
`;

function Navlist({children, menu}) {
  return (
    <nav>
      <Ul menu={menu}>
        {children}
      </Ul>
    </nav>
  )
}

export {Navlist}