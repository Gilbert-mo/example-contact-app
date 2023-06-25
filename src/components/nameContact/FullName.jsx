import Name from './Name'
import LastName from './LastName'

function FullName({name, lastName}) {
  return (
    <div style={{ display: "flex", flexDirection: 'row'}}>
      <Name name={name} />
      <LastName lastName={lastName} />
    </div>
  )
}

export default FullName
