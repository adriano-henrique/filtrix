import CopyIcon from "../../icons/CopyIcon"
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import { useToast } from "../ui/use-toast"

type JSONConvertedAreaProps = {
    value: string
}

export default function JSONConvertedArea(props: JSONConvertedAreaProps) {
    const {toast} = useToast()
    const copyToClipboard = () => {
        navigator.clipboard.writeText(props.value)
        alert("Copied to clipboard!")
        // toast({
        //     title: "Copied to clipboard!",
        //     description: "The JSON object has been copied to your clipboard.",
        // })
    }
  return (
  <div className="flex items-center justify-between w-full">
  <div className="flex flex-col w-full">
    <div className="flex items-center justify-between">
      <div className="text-lg font-medium">Generated JSON object</div>
      <Button
        variant="ghost"
        onClick={copyToClipboard}
        size="icon"
        className="w-6 h-6 hover:bg-transparent text-muted-foreground hover:text-muted"
      >
        <CopyIcon className="w-4 h-4" />
        <span className="sr-only">Copy</span>
      </Button>
    </div>
    <Textarea className="bg-muted rounded-md p-4 text-muted-foreground mt-2 min-h-48" value={props.value} />
  </div>
</div>
  )
  }