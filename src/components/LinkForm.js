import React, { useState} from 'react'

const LinkForm = ({ refreshLinks }) => {

  const [name, setName] = useState('');
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = { name, url, description };
    try {
      const res = await fetch('/.netlify/functions/createLink', {
        method: 'POST',
        body: JSON.stringify(body)
      })
      resetForm()
      refreshLinks()
    } catch (error) {
      console.log(error)
    }
  }

  const resetForm = () => {
    setName('');
    setUrl('')
    setDescription('');
  }
  return (
    <div className='card'>
      <div className="card-header">
        Add Link
      </div>
      <div className="card-body">
        <form  onSubmit={handleSubmit}>
        <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="url">URL</label>
                        <input
                            type="text"
                            name="url"
                            className="form-control"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            name="description"
                            className="form-control"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">
                        Submit
                    </button>
        </form>
      </div>
    </div>
  )
}

export default LinkForm
