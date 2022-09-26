import { useIntervalFn } from '@vueuse/core'
import { ref, watchEffect } from 'vue'

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
}

export function useCountDown(options: UseCountOptions = {}) {
  const { initialCount = 60, interval = 1000 } = options

  const counter = ref(initialCount)
  const countDown = () => {
    counter.value -= 1
  }
  const { pause } = useIntervalFn(countDown, interval)

  watchEffect(() => {
    if (counter.value <= 0) {
      pause()
    }
  })

  return { counter, pause }
}
