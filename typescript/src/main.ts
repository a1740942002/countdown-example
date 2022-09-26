import './style.css'

interface CounterOptions {
  initialCount?: number
  interval?: number
}

function main() {
  const counterElement = document.querySelector<HTMLDivElement>('#counter')!
  createCounterComponent(counterElement)
}

function createCounterComponent(
  element: HTMLElement,
  options: CounterOptions = {}
) {
  const { initialCount = 60, interval = 1000 } = options

  // State
  let counter = 0
  let timer: number

  // Methods
  const setCounter = (count: number) => {
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
      counter = initialCount
      render()
      return clearInterval(timer)
    }
    setCounter(counter - 1)
  }, interval)
}

main()
