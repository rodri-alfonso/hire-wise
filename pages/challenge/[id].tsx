import ChallengeDetail from '@/sections/ChallengeDetail'
import Page from '@/layouts/Page'
import { challenges } from '@/mock/challenges'
import { userChallenges } from '@/mock/userChallenges'
import { Challenge, UserChallenge } from '@/share/challenge'
import { GetServerSideProps, NextPage } from 'next'

// TODO: buscar esto en firebase
const getUserChallengeFromFirebase = (userId: string, challengeId: string) => {
  return userChallenges.find(usrCh =>
    usrCh.challengeId === challengeId && usrCh.user.id === userId
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { userId } = ctx.query
  const id = ctx.params?.id

  const challenge = challenges.find(ch => ch.id === id)
  const userChallenge = getUserChallengeFromFirebase(userId as string, id as string)

  if (challenge === undefined || userId === undefined) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      challenge,
      userChallenge: userChallenge ?? null
    }
  }
}

interface IProps {
  challenge: Challenge
  userChallenge: UserChallenge
}

const ChallengePage: NextPage<IProps> = ({ challenge, userChallenge }) => {
  console.log('🚀 ~ file: [id].tsx:42 ~ userChallenge:', userChallenge)
  return (
    <Page title='Challenge Page' description='This is a challenge page'>
      <ChallengeDetail userChallenge={userChallenge} challenge={challenge} />
      {/* <Editor /> */}
    </Page>
  )
}

export default ChallengePage
