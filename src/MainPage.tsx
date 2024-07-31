import { FileUploader } from "./components/main-page/FileUploader"
import React from "react"
import { Textarea } from "./components/ui/textarea"
import { Label } from "@radix-ui/react-label"
import JSONConvertedArea from "./components/main-page/JSONConvertedArea"

function JSONArea({ items }: { items: any[] }) {
  return (
    <>
    {items.map((item, index) => (
      <>
        <JSONConvertedArea key={index} value={JSON.stringify(Object.fromEntries(item), null, 2)} />
      </>
    ))}
    </>
  )
}

function InvalidJSONArea() {
  return (
    <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">No files uploaded</h1>
          <p className="text-muted-foreground">Please upload a valid csv file.</p>
        </div>
  )
}

export default function MainPage() {
  const [jsonResult, setJsonResult] = React.useState<any[]>([])
  const [elements, setElements] = React.useState<any[]>([])

  return (
    <div className="grid md:grid-cols-2 min-h-screen w-full">
      <div className="flex flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
        <FileUploader
          setJsonResult={setJsonResult}
          setElements={setElements}
        />
        <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Your message</Label>
        <Textarea id="message" className="min-h-64" value={JSON.stringify(jsonResult, null, 2) === '[]' ? "" : JSON.stringify(jsonResult, null, 2)} placeholder="JSON Result will be displayed here" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 p-8">
        <div className="grid w-full max-w-md gap-4">
          {elements.length === 0 ? <InvalidJSONArea /> : <JSONArea items={elements} />}
        </div>
      </div>
    </div>
  )
}