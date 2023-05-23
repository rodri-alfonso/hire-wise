import { toast } from 'react-toastify'

export const showSuccessToast = (msg: string) => {
  toast.success(msg ?? 'Compiled Successfully!', {
    position: 'top-right',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  })
}

export const showErrorToast = (msg: string, timer: number) => {
  toast.error(msg ?? 'Something went wrong! Please try again.', {
    position: 'top-right',
    autoClose: timer ?? 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  })
}
