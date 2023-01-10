import React from 'react'

type DownloadType = {
  handlerFile: (value: string) => void
  file: string
  downloadFile: () => void
}

export const Download: React.FC<DownloadType> = React.memo(
  ({ downloadFile, file, handlerFile }) => {
    return (
      <div>
        <p onClick={downloadFile}>Download File</p>
        <select value={file} onChange={(e) => handlerFile(e.target.value)}>
          <option value='txt'>.txt</option>
          <option value='pdf'>.pdf</option>
          <option value='doc'>.doc</option>
        </select>
      </div>
    )
  },
)
