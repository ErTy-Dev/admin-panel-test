
const MainPage = () => {
  return (
    <div>
      {Array(10000).fill('hahahha hahahaa ').map((item,i) => <h1 key={i}>{item}</h1>)}
    </div>
  )
}

export default MainPage