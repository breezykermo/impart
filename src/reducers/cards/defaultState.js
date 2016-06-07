import { fromJS } from 'immutable'

export default fromJS({
  yes: {},
  no: {},
  toDo: {
    0: {
      id: 0,
      header: 'Supervise holiday program',
      organization: 'MindLab',
      location: 'Carlton Gore Road, Newmarket, Auckland',
      body: `MindLab is looking for volunteers to supervise our holiday programs,
  which we run for high school students. No specific experience is required.`,
    },
    1: {
      id: 1,
      header: 'NEXT',
      body: 'Aubergine',
    },
    2: {
      id: 2,
      header: 'NEXT',
      body: 'Carrot',
    },
    3: {
      id: 3,
      header: 'NEXT',
      body: 'Tomato',
    },
  },
})
