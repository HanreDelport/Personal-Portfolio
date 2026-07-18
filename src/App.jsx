import Hero from './components/Hero'
import ExpandableCardRow from './components/ExpandableCardRow'

const testItems = [
  { title: 'Interests', content: <p>Theatre, musicals, comedy shows.</p> },
  { title: 'Hobbies', content: <p>Gym, padel, gaming.</p> },
  { title: 'Dreams', content: <p>CEO of a tech start-up.</p> },
]

function App() {
  return (
    <div className="app">
      <Hero />
      <ExpandableCardRow title="def getAboutMe(self):" items={testItems} />
    </div>
  )
}

export default App