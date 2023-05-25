import Section from '@/layouts/Section'
import { Challenge, UserChallenge } from '@/share/challenge'
import SolutionDetails from './SolutionDetails'

interface IProps {
  challenge: Challenge
  userChallenge: UserChallenge
}

export default function ChallengeDetails ({ challenge, userChallenge }: IProps) {
  const { title, description, resolveTime, language } = challenge
  const isResolved = userChallenge !== null
  console.log('🚀 ~ file: ChallengeDetail.tsx:12 ~ ChallengeDetails ~ userChallenge !== null:', userChallenge !== null)

  const handleStartChallenge = () => {

  }

  return (
    <Section>
      <div className='max-w-2xl mx-auto p-4 border border-gray-100 rounded-md shadow-md mt-12'>
        <h1 className='text-3xl font-bold mb-3 text-blue-700'>{title}</h1>
        <p>{description}</p>
        <br />
        <p><span className='font-bold'>Tiempo de resolución:</span> {resolveTime} minutos</p>
        <p><span className='font-bold'>Lenguaje:</span> {language.label} </p>
        {
          !isResolved
            ? (
              <button
                onClick={() => handleStartChallenge()}
                className='px-3 py-1 bg-blue-700 text-white rounded-md mt-4'
              >
                Comenzar Challenge
              </button>
              )
            : (
              <a href='#solutionDetails' className='px-3 py-1 bg-green-700 text-white rounded-md mt-4'>
                Ver resultados
              </a>
              )
        }
        {
          isResolved && <SolutionDetails userChallenge={userChallenge} />
        }
      </div>
    </Section>
  )
}
