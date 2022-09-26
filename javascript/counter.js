function main() {
  const counterElement = document.querySelector('#counter')
  createCounter(counterElement)
}

function createCounter(element, options = {}) {
  const { initialCount = 60, interval = 1000 } = options

  // State
  let counter = 0
  let timer

  // Methods
  const setCounter = (count) => {
    counter = count
    render()
  }

  const render = () => {
    element.innerHTML = `<button>${counter}</button>`
  }

  // Effect
  setCounter(initialCount)
  timer = setInterval(() => {
    if (counter <= 0) {
      return clearInterval(timer)
    }
    setCounter(counter - 1)
  }, interval)
}

main()
