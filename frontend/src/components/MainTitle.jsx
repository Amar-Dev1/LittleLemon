import '../App.css';
const MainTitle = (props) => {
  return (
    <>
    <h1 className='main-title' style={{color:props.color}}>{props.title}</h1>
    </>
  )
}

export default MainTitle;