import _ from 'lodash'

export const getSizeLayout = (layout) => {
  let weightPreContent = {}
  let weightContent = {}

  if (layout.preContent) {
    weightPreContent.preContent = 12
  }

  if (layout.leftRail && layout.rightRail && layout.main) {
    weightContent = { leftRail: 3, main: 6, rightRail: 3 }
  } else if (layout.leftRail && layout.main) {
    weightContent = { leftRail: 4, main: 8 }
  } else if (layout.main && layout.rightRail) {
    weightContent = { main: 8, rightRail: 4 }
  } else if (layout.leftRail && layout.rightRail) {
    weightContent = { leftRail: 6, rightRail: 6 }
  } else if (layout.leftRail) {
    weightContent = { leftRail: 12 }
  } else if (layout.rightRail) {
    weightContent = { rightRail: 12 }
  } else if (layout.main) {
    weightContent = { main: 12 }
  }
  return _.merge(weightPreContent, weightContent)
}
