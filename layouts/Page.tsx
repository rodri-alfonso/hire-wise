import Head from 'next/head'
import { ReactElement } from 'react'

interface Props {
	title: string
	description: string
	hideHeader?: boolean
	hideFooter?: boolean
	children: ReactElement | ReactElement[]
}

export default function Page({ title, children, description, hideHeader = true, hideFooter = true }: Props) {
	return (
		<div className=''>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
			</Head>

			{!hideHeader && <header></header>}
			<main>{children}</main>
			{!hideFooter && <footer></footer>}
		</div>
	)
}
