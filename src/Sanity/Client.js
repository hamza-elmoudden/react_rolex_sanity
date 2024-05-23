import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'


export  const client = createClient({
        projectId: "gm5hf36g",
        dataset: "production",
        apiVersion: '2022-01-30',
        useCdn: true,
        token:"skspJ3oi7mEiR81SwSyYLHVZwA3ktsMKbvD8H5QUosN65O0HEHZQwtFH95VgaJ41Wtvuxrt2qDMd1uO7ggl2nz9ysF7BkFPzC5ajVS52EQ65jwGOyX2XAp6J3d3oediYq23QbhI69rpus6RnM0g0723bzZlDf2YCuGpinbk4SL5BYE556Ylc",
})


const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}