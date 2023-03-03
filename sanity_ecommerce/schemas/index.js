// export const schemaTypes = []
// import { createSchema } from "sanity";
// import { SchemaType } from "sanity";
import product from "./product";
import banner from "./banner";

// export default createSchema({
//     name: 'default',
//     types: SchemaType.concat([product, banner]),
// })
export const schemaTypes = ([product, banner])