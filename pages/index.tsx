import Link from 'next/link'
import Challenges from '@/sections/Challenges'

export default function Home() {
	return (
		<main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
			<div className='flex flex-col gap-10'>
				<h1 className='font-bold text-4xl '>HIRE WISE</h1>
				<Link className='bg-blue-400 px-5 py-2.5 rounded-md text-center' href='/#challenges'>
					Get Starter
				</Link>
			</div>
			<Challenges />
		</main>
	)
}
