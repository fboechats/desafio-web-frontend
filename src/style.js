import styled from 'styled-components'

export const Container = styled.div`
  background: #ffdd00;
  min-height: 100vh;
  font-family: sans-serif;
`

export const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  max-width: 768px;
  height: 85px;
  margin: 0 auto;
  padding: 20px 10px;
`

export const HeaderTitle = styled.p`
  border-bottom: 1px solid rgba(0,0,0,0.1);
  padding-bottom: 20px;
`

export const BackIcon = styled.span`
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00OTIsMjM2SDY4LjQ0Mmw3MC4xNjQtNjkuODI0YzcuODI5LTcuNzkyLDcuODU5LTIwLjQ1NSwwLjA2Ny0yOC4yODRjLTcuNzkyLTcuODMtMjAuNDU2LTcuODU5LTI4LjI4NS0wLjA2OA0KCQkJbC0xMDQuNTA0LDEwNGMtMC4wMDcsMC4wMDYtMC4wMTIsMC4wMTMtMC4wMTgsMC4wMTljLTcuODA5LDcuNzkyLTcuODM0LDIwLjQ5Ni0wLjAwMiwyOC4zMTRjMC4wMDcsMC4wMDYsMC4wMTIsMC4wMTMsMC4wMTgsMC4wMTkNCgkJCWwxMDQuNTA0LDEwNGM3LjgyOCw3Ljc5LDIwLjQ5Miw3Ljc2MywyOC4yODUtMC4wNjhjNy43OTItNy44MjksNy43NjItMjAuNDkyLTAuMDY3LTI4LjI4NEw2OC40NDIsMjc2SDQ5Mg0KCQkJYzExLjA0NiwwLDIwLTguOTU0LDIwLTIwQzUxMiwyNDQuOTU0LDUwMy4wNDYsMjM2LDQ5MiwyMzZ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=);
  width: 16px;
  height: 16px;
  cursor: pointer;
`

export const Search = styled.div`
  display: flex;
  align-items: center;
`

export const SearchInput = styled.input`
  background: #ffdd00;
  max-width: ${({ showSearch }) => showSearch ? '100px' : '0'};
  margin-left: 8px;
  outline: none;
  border: 0;
  border-bottom: 1px solid #000000;
  font-weight: 600;
  font-size: 14px;
  transition: all .5s ease;
  width: 100%;
`
