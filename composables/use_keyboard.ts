export const UseKeyboard = () => {
  const initialized = useState('keyboardInitialized', () => false)

  const initialize = () => {
    if(initialized.value) return

    document.addEventListener('keydown', (event: KeyboardEvent) => {
      onKeyDown(event.code)
    })

    initialized.value = true
  }

  let callback = ref<Function>()

  const onKeyDown = (code: string) => {
    if(!initialized.value || !callback.value) return

    switch (code) {
      case 'ArrowUp':
        callback.value(FCKeyEvent.Up)
        break
      case 'ArrowDown':
        callback.value(FCKeyEvent.Down)
        break
      case 'ArrowLeft':
        callback.value(FCKeyEvent.Left)
        break
      case 'ArrowRight':
        callback.value(FCKeyEvent.Right)
        break
      case 'Enter':
        callback.value(FCKeyEvent.Enter)
        break
      case 'Space':
        callback.value(FCKeyEvent.Space)
        break
      case 'Escape':
        callback.value(FCKeyEvent.Escape)
        break
      case 'Backspace':
        callback.value(FCKeyEvent.Backspace)
        break
      default:
        break
    }
  }

  const addCallback = (cb: Function) => {
    if(!initialized.value) initialize()

    callback.value = cb
  }
  
  return {
    addCallback,
  }
}

export enum FCKeyEvent {
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4,
  Enter = 5,
  Space = 6,
  Escape = 7,
  Backspace = 8
}