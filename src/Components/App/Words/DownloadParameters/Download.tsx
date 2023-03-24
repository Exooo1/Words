import React, {ChangeEvent} from "react";

type DownloadType = {
  handlerFile: (value: string) => void;
  file: string;
  downloadFile: () => void;
};
export const Download: React.FC<DownloadType> = React.memo(
  ({ downloadFile, file, handlerFile }) => {
    const changeFile = (e: ChangeEvent<HTMLSelectElement>) => {
      handlerFile(e.target.value);
    };
    return (
      <div>
        <p onClick={downloadFile}>Download File</p>
        <select value={file} onChange={changeFile}>
          <option value="txt">.txt</option>
          <option value="pdf">.pdf</option>
          <option value="doc">.doc</option>
        </select>
      </div>
    );
  }
);
