import { useProtectedRoute } from "@web/auth/use-protected-route";
import { ReviewPost } from "@ui";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";

import TestSelect from "@ui/components/TestSelect";

export default async function Home() {
  await useProtectedRoute();



  return (
    <Fragment>
      <div className="flex items-start">
        <FontAwesomeIcon icon={faRocket} className="mt-2 mr-4" size="xl" />
        <div>
          <h2 className="text-xl font-black">Latest Reviews</h2>
          <p className="-mt-2">From everyone in REVIEW_APP</p>
        </div>
      </div>
      <TestSelect />
      <div className="my-6" />
      <div className="flex flex-col lg:grid grid-cols-2 gap-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <ReviewPost className="mb-4" key={i}>
            {i}
          </ReviewPost>
        ))}
      </div>
    </Fragment>
  );
}
