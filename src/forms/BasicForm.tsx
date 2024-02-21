import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { styled } from "../../styled-system/jsx";
import { UserValidations, type User } from "../validations/user";

import { zodResolver } from "@hookform/resolvers/zod";

export default function BasicForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(UserValidations),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<User> = (data) => console.log(data);

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
      <Input defaultValue="test" {...register("username")} />

      {/* include validation with required or other standard HTML validation rules */}
      <Input
        required
        aria-invalid={errors.email ? "true" : undefined}
        {...register("email", { required: true })}
      />
      {/* errors will return when field validation fails  */}
      {errors.email && <span>{errors.email.message}</span>}

      <Button type="submit">Submit</Button>
    </styled.form>
  );
}
