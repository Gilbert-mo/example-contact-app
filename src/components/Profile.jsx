function Profile({ path, name, mr }) {
  const nameProfile = name[0].toUpperCase();
  function generateColor() {
    const orange = "bg-orange-500";
    const blue = "bg-sky-400";
    const green = "bg-green-500";
    const yellow = "bg-yellow-400";
    const red = "bg-red-500";
    const pink = "bg-pink-500";
    const fuchsia = "bg-fuchsia-500";
    const purple = "bg-purple-500";

    const colors = [orange, blue, green, yellow, red, pink, fuchsia, purple]
    const num = Math.floor(Math.random() * 7)
    return colors[num]
  }

  const color = generateColor()

  if (path === "") {
    return (
      <div
        className={`mr-${mr} ${mr !== 0 ? ' w-12 h-12' : 'w-28 h-28'} flex items-center justify-center shrink-0 ${color} rounded-full`}
      >
        <h2 className={`${mr === 0 ? 'text-5xl font-light ' : 'text-2xl font-medium'}`}>{nameProfile}</h2>
      </div>
    );
  }

  return (
    <div className={`${mr !== 0 ? 'mr-5 w-12 h-12' : 'w-28 h-28'} shrink-0`}>
      <img src={path} className={`rounded-full object-cover h-full w-full`} />
    </div>
  );
}

export default Profile;
