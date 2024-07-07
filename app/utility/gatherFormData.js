//This function gathers form data by iterating over form elements, storing values or files based on input type, and returning the data as an object.

export const gatherFormData = (form) => {
  const formData = {}; // Initialize an empty object to store form data
  Array.from(form.current.elements).forEach((input) => {
    // Iterate over form elements
    if (input.name) {
      // Check if the input has a name attribute
      formData[input.name] = input.type === "file" ? input.files : input.value;
      // Store the input value or files in the formData object based on input type
    }
  });
  return formData; // Return the gathered form data
};
