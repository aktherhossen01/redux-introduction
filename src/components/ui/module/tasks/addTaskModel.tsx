/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
//   FormDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField,FormDescription, FormItem, FormLabel, FormMessage } from "../../form"
import { useForm } from "react-hook-form"
import { Input } from "../../input"
import { DialogDescription } from "@radix-ui/react-dialog"


export function DialogDemo() {
    const from = useForm()

    const onSubmit =(data: any)=>{
        console.log(data);
        
    }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
          
        </DialogHeader>
        <Form {...from}>
  <form onSubmit={from.handleSubmit(onSubmit)}>
  <FormField
    control={from.control}
    name="title"
    render={({field}) => (
      <FormItem>
        <FormLabel />
        <FormControl>
          <Input {...field} value={field.value || ""}/>
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
  <FormField
    control={from.control}
    name="description"
    render={({field}) => (
      <FormItem>
        <FormLabel />
        <FormControl>
          <Input {...field} value={field.value || ""}/>
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />

        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
  </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
