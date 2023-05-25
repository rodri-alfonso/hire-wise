import React, { HTMLProps, ReactNode } from 'react'

interface IProps extends HTMLProps<HTMLElement> {
  children: ReactNode | ReactNode[]
}

export default function Section ({ children, ...props }: IProps) {
  return <section {...props}>{children}</section>
}
