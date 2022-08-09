 export const dateFormat = (blogDate) => {
    const date = new Date(blogDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const newDate = date.toLocaleDateString("id-ID", options);

    return newDate;
 }