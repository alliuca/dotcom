import styled from '@emotion/styled'

const Header = styled.div`
  position: absolute;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: calc(var(--default_padding) / 1.5);
`

export default Header
