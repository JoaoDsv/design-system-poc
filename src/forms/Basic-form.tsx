import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { styled } from "../../styled-system/jsx";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function BasicForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log("watch", watch("exampleRequired")); // watch input value by passing the name of it
  console.log("register", register("exampleRequired"));
  console.log("errors", errors);

  return (
    <styled.form
      display="flex"
      flexDirection="column"
      gap="20px"
      justifyContent="center"
      maxWidth="300px"
      margin="auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* register your input into the hook by invoking the "register" function */}
      <Input defaultValue="test" {...register("example")} />

      {/* include validation with required or other standard HTML validation rules */}
      <Input
        required
        aria-invalid={errors.exampleRequired ? "true" : undefined}
        {...register("exampleRequired", { required: true })}
      />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <Button type="submit">Submit</Button>
    </styled.form>
  );
}
