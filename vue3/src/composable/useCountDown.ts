import { useIntervalFn, Fn } from '@vueuse/core'
import { ref, onBeforeMount, watchEffect } from 'vue'

/**
 * Advanced technique
 * You can skip this if you aren't frontend developer :)
 */

// import type { InjectionKey, Ref } from 'vue'
// export interface CountDownInfo {
//   counter: Ref<number>
//   isCounting: Ref<boolean>
//   resume: Fn
//   pause: Fn
// }
// export const countDownInjectionKey: InjectionKey<CountDownInfo> = Symbol()

interface UseCountOptions {
  initialCount?: number
  interval?: number
  immediate?: boolean
}

export function useCountDown(options: UseCountOptions = {}) {
  const { initialCount = 60, interval = 1000, immediate = true } = options

  const counter = ref(0)
  const countDown = () => {
    counter.value -= 1
  }
  const {
    pause,
    resume,
    isActive: isCounting,
  } = useIntervalFn(countDown, interval)

  onBeforeMount(() => {
    if (!immediate) return pause()
    resume()
  })

  watchEffect(() => {
    if (counter.value <= 0) {
      pause()
      counter.value = initialCount
    }
  })

  return { counter, pause, resume, isCounting }
}
