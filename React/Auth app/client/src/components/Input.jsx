const Input = ({
    label,
    type,
    value,
    onChange,
    placeholder,
    required,
    ...props
}, ref) => {
  return (
    <div>
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            {...props}
            ref={ref}
        />
    </div>
  )
}

export default Input