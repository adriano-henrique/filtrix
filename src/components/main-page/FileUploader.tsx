import React from "react";
import { Input } from "../ui/input"
import Papa from "papaparse";
import { createJsonFromResult } from "../../helper/JsonHelper";

type FileUploaderProps = {
  setJsonResult: React.Dispatch<React.SetStateAction<any[]>>
  setElements: React.Dispatch<React.SetStateAction<any[]>>
}
export function FileUploader(props: FileUploaderProps) {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) =>  {
    const file = event.target.files?.[0]
    if (file) {
      Papa.parse(file,
        {
          header:true,
          complete: (results: any) => {
            props.setJsonResult(results.data)
            const parsedJsonResult = results.data.map((item: any) => Object.values(item))
            props.setElements(createJsonFromResult(parsedJsonResult))
          }
        }
      )
    }
  }
  return (
    <>
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Upload a File</h1>
          <p className="text-muted-foreground">Drag and drop a file or click to select a file to upload.</p>
        </div>
        <div className="w-full max-w-sm">
          <Input type="file" accept=".csv" id="file-upload" className="w-full" onChange={handleFileUpload} />
        </div>
        </>
  )
}