import React from 'react'
import LinkCard from './LinkCard'
const LinkList = ({ links, refreshLinks }) => {
  return (
    <div>
      <h2 className='my-4'>links</h2>
      { links && links.filter(link => !link.archived).map(link => {
        return <LinkCard key={link._id} link={link} refreshLinks={refreshLinks} />
      })}

    <h2 className='my-4'>Archived Links</h2>
      { links && links.filter(link => link.archived).map(link => {
        return <LinkCard key={link._id} link={link} refreshLinks={refreshLinks} />
      })}
    </div>
  )
}

export default LinkList
