const TextInput = () => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Input value:' + event.target.value);
    }

  return(
    <input type="text" onChange={handleChange} placeholder ="Enter text here" />
  )   

}

export default TextInput;