const handleInput = (e, input, setInput) => {
   const { name, value } = e.target;
   setInput({ ...input, [name]: value });
};

export default handleInput;
