import Header from './components/Header'
import Tab from './components/Tab'
import { styled } from './config/stitches'

function App() {
  return (
    <Layout>
      <AppContainer>
        <Header />
        <Body>
          <Tab selectedTab="week" />
        </Body>
      </AppContainer>
    </Layout>
  )
}

const Layout = styled('div', {
  height: '100dvh',
  width: '100dvw',
  backgroundColor: '$black',
})

const AppContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100dvw',
  maxWidth: '350px',
  backgroundColor: '$white',
  height: '100dvh',
  margin: '0 auto',
})

const Body = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '5px 40px',
})

export default App
