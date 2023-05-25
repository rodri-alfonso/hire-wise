import ChallengeDetails from '@/components/ChallengeDetails'
import Page from '@/layouts/Page'
import { challenges } from '@/mock/challenges'
import { Challenge } from '@/share/challenge'
import { GetServerSideProps, NextPage } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.id
  const challenge = challenges.find(ch => ch.id === id)

  if (challenge == null) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      challenge
    }
  }
}

interface IProps {
  challenge: Challenge
}

const ChallengePage: NextPage<IProps> = ({ challenge }) => {
  return (
    <Page title='Challenge Page' description='This is a challenge page'>
      <ChallengeDetails challenge={challenge} />
      {/* <Editor /> */}
    </Page>
  )
}

export default ChallengePage
