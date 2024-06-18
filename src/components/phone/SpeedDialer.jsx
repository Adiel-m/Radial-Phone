import SpeedDialList from './SpeedDialList'
import OperatingInstructions from './OperatingInstructions'

export default function SpeedDialer() {
  const handleClick = (e) => {
    const el = document.querySelector('.info')
    console.log(el)
    el.style.insetInlineEnd = '0'
  }

  return (
    <div className="speed-dialer">
      <header className="row">
        <h2>Speed Dial</h2>
        <button className="btn--round" onClick={handleClick}>
          ℹ️
        </button>
      </header>
      <SpeedDialList />
      <OperatingInstructions />
    </div>
  )
}
