import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import invoices from "@/data/donatesData";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="md:flex justify-between items-center">
        <h1 className="md:text-3xl text-xl max-md:text-center font-semibold my-3">
          Thank you for supporting me!
        </h1>
        <Dialog>
          <DialogTrigger className="bg-secondary px-4 py-2 max-md:w-full rounded-md hover:shadow-lg duration-300">
            Donate
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex flex-col items-center justify-center">
                <span>Donate to</span>
                <span className="mt-2">Talha</span>
              </DialogTitle>
              <DialogDescription className="max">
                <RadioGroup
                  defaultValue="option-two"
                  className="flex items-center justify-between mt-5"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one">$ 10 USD</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">$ 20 USD</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-three" id="option-three" />
                    <Label htmlFor="option-three">$ 30 USD</Label>
                  </div>
                </RadioGroup>
                <Button className="mt-8 w-full primary">Thanks!</Button>
                <Link
                  className={buttonVariants({
                    variant: "outline",
                    className: "w-full mt-3",
                  })}
                  href="https://buymeacoffee.com/talhaozbek61"
                  target="_blank"
                >
                  Maybe this way
                </Link>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices?.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}
