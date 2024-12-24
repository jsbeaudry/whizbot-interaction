import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface RoleFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export function RoleFilter({ value, onChange }: RoleFilterProps) {
  return (
    <div className="mb-4 space-y-1">
      <Label htmlFor="roleFilter">Filter by Role</Label>
      {/* <Select value={value} onValueChange={onChange}>
        <SelectTrigger id="roleFilter" className="w-[200px]">
          <SelectValue placeholder="Select a role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All Roles</SelectItem>
          <SelectItem value="customer_support">Customer Support</SelectItem>
          <SelectItem value="sales">Sales</SelectItem>
          <SelectItem value="technical_support">Technical Support</SelectItem>
          <SelectItem value="marketing">Marketing</SelectItem>
        </SelectContent>
      </Select> */}
    </div>
  );
}