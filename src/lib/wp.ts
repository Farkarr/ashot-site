const wpDomain = import.meta.env.WP_DOMAIN
const apiUrl = `${wpDomain}/wp-json/wp/v2`;
console.log(apiUrl);

export const getPageInfo = async (slug:string) => {
   const response = await fetch(`${apiUrl}/pages?slug=${slug}`);

   if(!response.ok) throw new Error("Failed to fecth page info");

   const [data] = await response.json();

   const {title: {rendered:title}, content: {rendered: content}} = data;
   // console.log(content);
   return {title, content};
}