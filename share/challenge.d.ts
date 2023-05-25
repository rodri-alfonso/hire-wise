interface Language {
  id: number
  name: string
  label: string
  value: string
}

interface EditorTheme {
  key: string
  label: string
  value: string
}

export interface SubmissionResponseData {
  token: string
}

export interface OutputDetails {
  source_code: string
  language_id: number
  stdin: string
  expected_output: null
  stdout: string
  status_id: number
  created_at: Date
  finished_at: Date
  time: string
  memory: number
  stderr: null
  token: string
  number_of_runs: number
  cpu_time_limit: string
  cpu_extra_time: string
  wall_time_limit: string
  memory_limit: number
  stack_limit: number
  max_processes_and_or_threads: number
  enable_per_process_and_thread_time_limit: boolean
  enable_per_process_and_thread_memory_limit: boolean
  max_file_size: number
  compile_output: null
  exit_code: number
  exit_signal: null
  message: null
  wall_time: string
  compiler_options: null
  command_line_arguments: null
  redirect_stderr_to_stdout: boolean
  callback_url: null
  additional_files: null
  enable_network: boolean
  status: Status
  language: Language
}

export interface Status {
  id: number
  description: string
}

// * Un test para hacer las pruebas del código (puede que de esta forma no sea valido ya que esto solo hace pruebas de I/O)
interface Test {
  description: string
  input: any[]
  expected: any
}

export interface Challenge {
  id: string
  title: string
  description: string
  tests: Test[]
  offer: {
    id: string
    title: string
    description: string
  }
  initialCode: string
  language: Language
  resolveTime: number
}

export interface UserChallenge {
  id: string
  challengeId: Challenge['id']
  user: {
    name: string
    id: string
    picture: string
  }
  code: string
}
