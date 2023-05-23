import { loader } from '@monaco-editor/react'
import monacoThemes from 'monaco-themes/themes/themelist.json'

const defineTheme = async (theme: EditorTheme['value']): Promise<EditorTheme> => {
  const themeLabel = monacoThemes[theme as keyof typeof monacoThemes]
  return await new Promise((resolve) => {
    void Promise.all([
      loader.init(),
      import(`monaco-themes/themes/${themeLabel}.json`)
    ]).then(([monaco, themeData]) => {
      monaco.editor.defineTheme(theme, themeData)
      resolve(themeData)
    })
  })
}

export { defineTheme }
