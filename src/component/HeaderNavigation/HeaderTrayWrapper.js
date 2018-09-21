import React from 'react'

import HeaderTrayButton from './HeaderTrayButton'

const HeaderTrayWrapper = () => {
  const TAB_NAME = [
    null,
    'about me',
    'projects',
    'contact me'
  ]
  return (
    <div className='header-nav__wrapper'>
      {TAB_NAME.map((tab, index) =>
        tab &&
          <HeaderTrayButton
            tabName={tab}
            tabNumber={index}
            key={index}
          />
      )}
    </div>
  )
}

export default HeaderTrayWrapper