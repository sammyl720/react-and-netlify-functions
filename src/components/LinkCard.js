import React from 'react'

const LinkCard = ({ link, refreshLinks }) => {
  const archiveLink = async () => {
    link.archived = true;
    try {
      await fetch('/.netlify/functions/updateLink', {
        method: 'PUT',
        body: JSON.stringify(link)
      })
      refreshLinks()
    } catch (error) {
      console.log('AHHHH', error)
    }
  }

  const deleteLink = async () => {
    const _id = link._id;
    try {
      await fetch('/.netlify/functions/deleteLink', {
        method: 'DELETE',
        body: JSON.stringify({ _id})
      })
      refreshLinks()
    } catch (error) {
      console.log('AHHHH', error)
    }
  }
  return (
    <div className='card'>
      <div className="card-header">
        {link.name}
      </div>
      <div className="card-body">
        <a href={link.url}>{link.url}</a>
        <p>{link.description}</p>    
      </div>
      <div className="card-footer">
        <button className="btn btn-warning mr-2" onClick={archiveLink}>
          Archive
        </button>
        <button className="btn btn-danger" onClick={deleteLink}>Delete</button>
      </div>
    </div>
  )
}

export default LinkCard
