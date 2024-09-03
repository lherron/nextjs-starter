import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Sample page for shadcn components
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Shadcn Sampler</CardTitle>
          <CardDescription>A sample card and select box from shadcn.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Sample Input</Label>
                <Input id="name" placeholder="Your sample input text here" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="coolselect">Cool Selection</Label>
                <Select>
                  <SelectTrigger id="coolselect">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="sample1">Sample 1</SelectItem>
                    <SelectItem value="sample2">Sample 2</SelectItem>
                    <SelectItem value="sample3">Sample 3</SelectItem>
                    <SelectItem value="sample4">Sample 4</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Ok</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
