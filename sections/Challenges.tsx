import Section from '@/layouts/Section'
import Link from 'next/link'

const CHALLENGES_MOCK = [1, 2, 3]

export default function Challenges() {
	return (
		<Section>
			<h1 id='challenges' className='pb-10'>
				Challenges list
			</h1>
			<div className='grid gap-6'>
				{CHALLENGES_MOCK.map((challenge) => (
					<Link
						className='rounded-md p-2 border-gray-100 border border-solid hover:bg-gray-100 hover:text-black transition-all'
						key={challenge}
						href={`/challenge/${challenge}`}
					>
						Challenge numero: {challenge}
					</Link>
				))}
			</div>
		</Section>
	)
}
