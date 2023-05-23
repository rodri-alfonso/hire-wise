import { getSubmissionData, submitCode } from '@/lib/judge0'
import { Language, OutputDetails } from '@/share/challenge'
import { useEffect, useRef, useState } from 'react'

export default function useCompile () {
  const [token, setToken] = useState('')
  const [data, setData] = useState<OutputDetails>()
  const intervalId = useRef<any>()
  const [processing, setProcessing] = useState(false)

  useEffect(() => {
    console.log('🚀 ~ file: useCompile.tsx:13 ~ useEffect ~ token:', token)
    if (token !== '') {
      clearInterval(intervalId.current)
      intervalId.current = setInterval(() => {
        void getSubmissionData(token)
          .then(res => {
            if (![1, 2].includes(res?.status.id as number)) {
              setData(res)
              setToken('')
              setProcessing(false)
            }
          })
      }, 2000)
    }
  }, [token])

  const compile = (code: string, language: Language) => {
    setProcessing(true)
    submitCode({ language, code, customInput: '' })
      .then(token => setToken(token as string))
      .catch(console.error)
  }

  return {
    data,
    compile,
    processing
  }
}
