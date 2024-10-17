import { Input, Textarea } from "@ui";

import { Fragment } from "react";

export default function CreateReview() {
  return (
    <Fragment>
      <h2 className="text-xl font-black">Create a Review</h2>

      <div className="my-8"></div>

      <h5 className="font-medium ml-2">Title</h5>
      <Input placeholder="This restaurant is bad!" />

      <div className="my-4"></div>

      <h5 className="font-medium ml-2">Review</h5>
      <Textarea placeholder="This is where I talk about the product. it is good. it is fantaaaaaaaaaaastic" />
    </Fragment>
  );
}
