import { EditorTheme, Language } from '@/share/challenge'
import { defineTheme } from '@/utils/theme'
import { useEffect, useState } from 'react'
import useCompile from './useCompile'

interface InitialState {
  initialCode: string
  language: Language
  theme: EditorTheme
}

export default function useEditor (data: InitialState) {
  const [code, setCode] = useState(data.initialCode ?? '')
  const [theme, setTheme] = useState<EditorTheme>(data.theme)
  const { data: outputDetails, compile, processing } = useCompile()

  useEffect(() => {
    void defineTheme(data.theme?.value)
      .then((th) => setTheme(th))
  }, [data.theme])

  function handleThemeChange (th: EditorTheme) {
    if (['light', 'vs-dark'].includes(theme.value)) {
      setTheme(th)
    } else {
      void defineTheme(th.value).then(() => setTheme(th))
    }
  }

  const codeChange = (action: any, data: any) => {
    switch (action) {
      case 'code': {
        setCode(data)
        break
      }
      default: {
        console.warn('case not handled!', action, data)
      }
    }
  }

  const handleCompile = () => {
    compile(code, data.language)
  }

  return {
    language: data.language,
    code,
    codeChange,
    outputDetails,
    theme,
    handleThemeChange,
    processing,
    handleCompile
  }
}
