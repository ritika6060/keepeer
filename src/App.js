import React from 'react'
import { useFileUpload } from 'use-file-upload'

const App = () => {
  const [files, selectFiles] = useFileUpload()

  return (
    <div>
      <button
        onClick={() => {
          // Single File Upload
          selectFiles({ multiple: true }, (files) => {
            // Note callback return an array
              files.map(({ source, name, size, file }) =>{
                console.log({ source, name, size, file })
              })
            // Todo: Upload to cloud.
          }))
        }}
      >
        Click to Upload
      </button>

      {files ? (
        files.map((file) => (
          <div>
            <img src={file.source} alt='preview' />
            <span> Name: {file.name} </span>
            <span> Size: {file.size} </span>
          </div>
        ))
      ) : (
        <span>No file selected</span>
      )}
    </div>
  )
}

export default App
