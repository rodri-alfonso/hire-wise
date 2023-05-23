import React, { useEffect, useState } from 'react'
import useKeyPress from '../hooks/useKeyPress'
import OutputWindow from './OutputWindow'
import CustomInput from './CustomInput'
import OutputDetails from './OutputDetails'
import ThemeDropdown from './ThemeDropdown'
import Toast from './Toast'
import useEditor from '@/hooks/useEditor'
import { Editor } from '@monaco-editor/react'

const javascriptDefault = `/**
* Problem: Binary Search: Search a sorted array for a target value.
*/

// Time: O(log n)
const binarySearch = (arr, target) => {
 return binarySearchHelper(arr, target, 0, arr.length - 1);
};

const binarySearchHelper = (arr, target, start, end) => {
 if (start > end) {
   return false;
 }
 let mid = Math.floor((start + end) / 2);
 if (arr[mid] === target) {
   return mid;
 }
 if (arr[mid] < target) {
   return binarySearchHelper(arr, target, mid + 1, end);
 }
 if (arr[mid] > target) {
   return binarySearchHelper(arr, target, start, mid - 1);
 }
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
console.log(binarySearch(arr, target));
`

const initialState = {
  language: {
    id: 63,
    name: 'JavaScript (Node.js 12.14.0)',
    label: 'JavaScript (Node.js 12.14.0)',
    value: 'javascript'
  },
  theme: {
    value: 'oceanic-next',
    key: 'oceanic-next',
    label: 'Oceanic Next'
  },
  initialCode: javascriptDefault
}

const Landing = () => {
  const {
    code,
    codeChange,
    language,
    outputDetails,
    theme,
    handleThemeChange,
    processing,
    handleCompile
  } = useEditor(initialState)
  const [customInput, setCustomInput] = useState('')
  const enterPress = useKeyPress('Enter')
  const ctrlPress = useKeyPress('Control')

  useEffect(() => {
    if (enterPress && ctrlPress) {
      console.log('enterPress', enterPress)
      console.log('ctrlPress', ctrlPress)
      void handleCompile()
    }
  }, [ctrlPress, enterPress, handleCompile])

  return (
    <>
      <Toast />
      <div className='flex flex-row'>
        <div className='px-4 py-2'>
          <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
        </div>
      </div>
      <div className='flex flex-row space-x-4 items-start px-4 py-4'>
        <div className='flex flex-col w-full h-full justify-start items-end'>
          <div className='overlay rounded-md overflow-hidden w-full h-full shadow-4xl'>
            <Editor
              height='85vh'
              width='100%'
              language={language.value ?? 'javascript'}
              value={code}
              theme={theme.value}
              defaultValue='// some comment'
              onChange={codeChange}
            />
          </div>
        </div>

        <div className='right-container flex flex-shrink-0 w-[30%] flex-col'>
          <OutputWindow outputDetails={outputDetails} />
          <div className='flex flex-col items-end'>
            <CustomInput
              customInput={customInput}
              setCustomInput={setCustomInput}
            />
            <button
              onClick={handleCompile}
              disabled={(code === '')}
              className={`text-black mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0 ${(code === '') ? 'opacity-50' : ''}`}
            >
              {processing ? 'Processing...' : 'Compile and Execute'}
            </button>
          </div>
          {outputDetails !== undefined && <OutputDetails outputDetails={outputDetails} />}
        </div>
      </div>
    </>
  )
}
export default Landing
