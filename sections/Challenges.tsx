import Section from '@/layouts/Section'
import { challenges } from '@/mock/challenges'
import Link from 'next/link'

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
            href={`/challenge/${challenge.id}`}
          >
            Challenge: {challenge.title}
          </Link>
        ))}
      </div>
    </Section>
  )
}
