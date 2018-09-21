import React from 'react'
import DATA from './content.json'

const ContactMe = () => {
  const mailTo = `mailto:${DATA.email}`
  const callNumber = `tel:${DATA.phoneRaw}`

  return (
    <div className='page__main'>
      <p>If you're interested in chatting or just sharing something neat, please e-mail me
      at <a href={mailTo}>{DATA.email}</a> or <a href={callNumber}>{DATA.phoneFormatted}</a>.
      </p>
    </div>
  )
}

export default ContactMe