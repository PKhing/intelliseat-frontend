import { Typography } from '../Typography'
import { TabContainer } from './styled'

const Tab = ({ selectedTab }: { selectedTab: 'day' | 'week' | 'month' }) => {
  const tabs = ['day', 'week', 'month']

  return (
    <TabContainer>
      {tabs.map((tab) => (
        <Typography
          key={tab}
          variant="p2"
          css={{
            color: tab === selectedTab ? '$black' : '$gray',
            cursor: 'pointer',
          }}
        >
          {tab}
        </Typography>
      ))}
    </TabContainer>
  )
}

export default Tab
