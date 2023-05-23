import { Language, OutputDetails, SubmissionResponseData } from '@/share/challenge'
import { showErrorToast } from '@/utils/toast'
import axios, { AxiosError } from 'axios'

const baseParams = {
  params: { base64_encoded: 'true', fields: '*' },
  headers: {
    'content-type': 'application/json',
    'Content-Type': 'application/json',
    'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_HOST,
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY
  }
}

interface SubmitCodeParams {
  language: Language
  code: string
  customInput: string
}

export const submitCode = async ({ language, code, customInput }: SubmitCodeParams) => {
  const formData = {
    language_id: language.id,
    // encode source code in base64
    source_code: btoa(code),
    stdin: btoa(customInput)
  }
  const options = {
    ...baseParams,
    method: 'POST',
    url: process.env.NEXT_PUBLIC_RAPID_API_URL,
    data: formData
  }

  try {
    const res = await axios.request<SubmissionResponseData>(options)
    const token = res.data.token
    return token
  } catch (error) {
    handleApiError(error as any)
  }
}

export const getSubmissionData = async (token: string) => {
  const options = {
    ...baseParams,
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_RAPID_API_URL ?? ''}/${token}`
  }
  try {
    const response = await axios.request<OutputDetails>(options)
    return response.data
  } catch (err) {
    console.log('err', err)
    showErrorToast('Unexpected Error', 2000)
  }
}

// TODO: handle more status codes
export const handleApiError = (err: AxiosError) => {
  const status = err?.response?.status
  if (status === 429) {
    showErrorToast(
      'Quota of 100 requests exceeded for the Day! Please read the blog on freeCodeCamp to learn how to setup your own RAPID API Judge0!',
      10000
    )
  } else showErrorToast('Unexpected Error', 2000)
}
