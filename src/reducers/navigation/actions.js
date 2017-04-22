export const GO_TO_VIEW = 'GO_TO_VIEW'
export const goToView = view => ({
  type: GO_TO_VIEW,
  view
})

export const POP_VIEW = 'POP_VIEW'
export const popView = () => ({
  type: POP_VIEW
})
