import Section from '@/layouts/Section'
import { challenges } from '@/mock/challenges'
import Link from 'next/link'

// TODO: este id es el id del usuario de infojobs. Se usa para buscar si ya tiene challenges resueltos y guardados en firebase. Imagino que si esta logueado esto se encuentra en un context y se accede desde ahí. Por ahora ta mockeado je
const MOCK_USER_ID = '294n892r3skjdf'

export default function Challenges () {
  return (
    <Section>
      <h1 id='challenges' className='pb-10'>
        Challenges list
      </h1>
      <div className='grid gap-6'>
        {challenges.map((challenge) => (
          <Link
            className='rounded-md p-2 border-gray-100 border border-solid hover:bg-gray-100 hover:text-black transition-all'
            key={challenge.id}
            href={`/challenge/${challenge.id}?userId=${MOCK_USER_ID}`}
          >
            Challenge: {challenge.title}
          </Link>
        ))}
      </div>
    </Section>
  )
}
