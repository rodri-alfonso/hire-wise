import React, { ReactNode } from 'react'

interface Props {
	children: ReactNode | ReactNode[]
}

export default function Section({ children }: Props) {
	return <section>{children}</section>
}
