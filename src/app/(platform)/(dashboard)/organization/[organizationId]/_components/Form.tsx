"use client";
import { Button } from "@/components/ui/button";
import FormInput from "./FormInput";
import FromButton from "./FromButton";
import { useAction } from "@/hooks/useAction";
import { createBoard } from "@/actions/createBoard";

const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: data => {
      console.log(data);
    },
    OnError: error => {
      console.log(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  };
  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput errors={fieldErrors}></FormInput>
      </div>
      <FromButton></FromButton>
    </form>
  );
};
export default Form;
