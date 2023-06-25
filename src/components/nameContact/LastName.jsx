function LastName({lastName}) {
  function capitalizeInitials(str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  let lastNameContact = capitalizeInitials(lastName);
  return <h4 style={{marginBottom: '0'}} className="truncate-text">{lastNameContact}</h4>;
}

export default LastName;
