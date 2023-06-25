function Name({name}) {
    function capitalizeInitials(str) {
        return str
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      }
    
      let nameContact = capitalizeInitials(name)
  return (
    <h4 style={{marginRight: '4px', marginBottom: '0'}} className="truncate-text">
      {nameContact}
    </h4>
  )
}

export default Name
