import StyledInput from "./style";

export default function Input({ type, value, onChange, placeholder }) {
  return (
    <StyledInput
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
