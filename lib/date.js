export const dateFormat = (blogDate) => {
   const date = new Date(blogDate);
   const options = { year: "numeric", month: "long", day: "numeric" };
   const newDate = date.toLocaleDateString("id-ID", options);

   return newDate;
}
 
export const dateFormatDay = (blogDate) => {
  const date = new Date(blogDate);
  const options = {month: "long", day: "numeric" };
  const newDate = date.toLocaleDateString("id-ID", options);

  return newDate;
}

export const dateFormatOnlyDay = (blogDate) => {
  const date = new Date(blogDate);
  const options = {day: "numeric" };
  const newDate = date.toLocaleDateString("id-ID", options);
  return newDate;
}

export const dateFormatOnlyMonth = (blogDate) => {
  const date = new Date(blogDate);
  const options = {month: "long" };
  const newDate = date.toLocaleDateString("id-ID", options);
  return newDate;
}
