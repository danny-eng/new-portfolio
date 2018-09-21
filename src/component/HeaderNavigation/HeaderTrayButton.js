import React from 'react'
import PropType from 'prop-types'

import { BrowserRouter as Link } from 'react-router-dom'

const HeaderTrayButton = (props) => {
  const {
    tabName,
    tabURL,
  } = props
  return (
    <li>
      <Link to={tabURL}>{tabName}</Link>
    </li>
  )
}

HeaderTrayButton.propTypes = {
  tabName: PropType.string,
  tabURL: PropType.string,
}

HeaderTrayButton.defaultProps = {
  tabName: 'Home',
  tabURL: '/',
}

export default HeaderTrayButton