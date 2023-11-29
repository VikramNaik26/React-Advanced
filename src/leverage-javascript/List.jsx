import { People } from './People'
import { people } from '../data'

const List = () => {
  return (
    <div>
      {people.map((person) => {
        return <People key={person.id} {...person} />
      })}
    </div>
  )
}
export default List
