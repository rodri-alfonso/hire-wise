import { Challenge } from '@/share/challenge'

interface IProps {
  challenge: Challenge
}

export default function ChallengeDetails ({ challenge }: IProps) {
  const { title, description, resolveTime, language } = challenge

  const handleStartChallenge = () => {

  }

  return (
    <div className='max-w-2xl mx-auto p-4 border border-gray-100 rounded-md shadow-md mt-12'>
      <h1 className='text-3xl font-bold mb-3 text-blue-700'>{title}</h1>
      <p>{description}</p>
      <br />
      <p><span className='font-bold'>Tiempo de resolución:</span> {resolveTime} minutos</p>
      <p><span className='font-bold'>Lenguaje:</span> {language.label} </p>
      <button
        onClick={() => handleStartChallenge()}
        className='px-3 py-1 bg-blue-700 text-white rounded-md mt-3'
      >
        Comenzar Challenge
      </button>
    </div>
  )
}
