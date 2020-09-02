export function handleMovement(player) {
  function handleKeyDown(event) {
    switch (event.keyCode) {
      default:
        return console.log(event.keyCode)
    }
  }

  window.addEventListener('keydown', event => {
    handleKeyDown(event)
  })

  return player
}
