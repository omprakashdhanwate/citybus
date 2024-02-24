import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/primitives/form";

import { Card, CardContent } from "@/ui/primitives/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { InputRoutesFormSchema } from "@/lib/input-routes-form-schema";
import { Input } from "../primitives/input";
import { Button } from "../primitives/button";

export function InputRoutes() {
  const form = useForm<z.infer<typeof InputRoutesFormSchema>>({
    defaultValues: {
      currentLocation: "",
      destination: "",
    },
  });
  return (
    <>
      <Card>
        <h1 className={"text-3xl text-center my-8"}>Check Routes</h1>
        <CardContent>
          <Form {...form}>
            <form className={"flex flex-col gap-8"}>
              <FormField
                control={form.control}
                name={"currentLocation"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter your Current Location</FormLabel>
                    <FormControl>
                      <Input
                        className={"rounded-full px-4 py-6"}
                        placeholder="pune"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"destination"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter your Destination</FormLabel>
                    <FormControl>
                      <Input
                        className={"rounded-full px-4 py-6"}
                        placeholder="SPPU"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
            <Button className={"my-4 rounded-2xl"}>Check Routes</Button>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
