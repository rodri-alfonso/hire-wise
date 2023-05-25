import Section from '@/layouts/Section'
import { UserChallenge } from '@/share/challenge'

interface IProps {
  userChallenge: UserChallenge
}

export default function SolutionDetails (props: IProps) {
  return (
    <Section id='solutionDetails'>
      <h2>Resultados</h2>
    </Section>
  )
}
