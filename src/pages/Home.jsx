import BoardView from '../components/Board.jsx'
function Home() {
  return (

	<div className='boardContainer'>
	  <BoardView />
	  <p className='credits-p'>Game by <a href="https://www.github.com/monicatvera">monicatvera</a></p>
	</div>
  )
}

export default Home
