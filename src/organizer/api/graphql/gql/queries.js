import gql from 'graphql-tag'

export const UPCOMING_EVENTS = gql`
  query upcomingEvents($organizerId: ID) {
     upcomingEvents(organizerId: $organizerId) {
        id
        createDatetime
        modifiedDatetime
        title
        slug
        description
        scheduledDatetime
        lobbyOpen
        active
     }
  }
`

export const EXPIRED_EVENTS = gql`
  query expiredEvents($organizerId: ID) {
     expiredEvents(organizerId: $organizerId) {
        id
        createDatetime
        modifiedDatetime
        title
        slug
        description
        scheduledDatetime
        lobbyOpen
        active
     }
  }
`

export const EVENT_USERS_BY_EVENT = gql`
  query findEventUserByEvent($eventId: ID) {
    eventUsers(eventId: $eventId) {
      id
      eventId
      publicName
      verified
      allowToVote
      online
      username
      voteAmount
    }
  }
`

export const ORGANIZERS = gql`
  query findOrganizers {
    organizers {
      id
      createDatetime
      username
      email
      password
      publicName
      events {
        id
      }
      confirmedEmail
      superAdmin
      verified
    }
  }
`

export const POLLS_NO_RESULTS = gql`
  query findPollsWithNoResults($eventId: ID) {
    pollsWithNoResults(eventId: $eventId) {
      id
      title
    }
  }
`

export const ACTIVE_POLL = gql`
  query findActivePoll($eventId: ID) {
    activePoll(eventId: $eventId) {
      id
      title
      maxVotes
      answerCount
      pollUserCount
      pollUserVotedCount
    }
  }
`
