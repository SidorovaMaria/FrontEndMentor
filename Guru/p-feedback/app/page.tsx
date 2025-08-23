import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

import Input from "@/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";

export default function Home() {
  return (
    <div className="container m-10">
      <Input type="text" />
      <Button variant="darkblue">Submit</Button>
      <Select>
        <SelectTrigger variant="dark" className="">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="most upvotes">Most Upvotes</SelectItem>
          <SelectItem value="least upvotes">Least Upvotes</SelectItem>
          <SelectItem value="most comments">Most Comments</SelectItem>
          <SelectItem value="least comments">Least Comments</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger variant="light">
          <SelectValue placeholder="Select and option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="feature">Feature</SelectItem>
          <SelectItem value="UI">UI</SelectItem>
          <SelectItem value="UX">UX</SelectItem>
          <SelectItem value="Enhancement">Enhancement</SelectItem>
          <SelectItem value="Bug">Bug</SelectItem>
        </SelectContent>
      </Select>
      <Badge icon>99</Badge>
      <Badge icon variant="active">
        100
      </Badge>
      <Badge variant="active">UX</Badge>
    </div>
  );
}
