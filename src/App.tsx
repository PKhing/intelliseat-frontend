import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { styled } from './config/stitches'
import DayPage from './page/DayPage'
import WeekPage from './page/WeekPage'
import MonthPage from './page/MonthPage'

function App() {
  return (
    <Layout>
      <AppContainer>
        <Header />
        <Body>
          <Router>
            <Routes>
              <Route path="/" element={<DayPage />} />
              <Route path="/day" element={<DayPage />} />
              <Route path="/week" element={<WeekPage />} />
              <Route path="/month" element={<MonthPage />} />
            </Routes>
          </Router>
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
  maxWidth: '420px',
  backgroundColor: '$white',
  height: '100dvh',
  margin: '0 auto',
  overflowY: 'auto',
})

const Body = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '5px 40px 30px 40px',
  gap: '16px',
  justifyContent: 'center',
  alignItems: 'center',
})

export default App
