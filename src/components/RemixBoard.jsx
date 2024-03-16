
export default function RemixBoard({audioRef,audioContext}) {

  return (
    <div className="Remixboard-wrapper">
      <h1>remix board</h1>
      <button onClick={()=>osc1.start()}>oscillator 1(start)</button>
      <button onClick={()=>osc1.stop()}>oscillator 1(start)</button>
    </div>
  )
}
