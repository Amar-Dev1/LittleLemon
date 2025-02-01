import '../App.css';
const MainTitle = (props) => {
  return (
    <>
    <h1 className='main-title' style={props.styles}>{props.title}</h1>
    </>
  )
}

export default MainTitle;