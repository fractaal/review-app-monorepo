import Button from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";

export default function Layout({ children = null as React.ReactNode }) {
  return (
    <div className="grid grid-rows-[4rem_1fr] min-h-screen">
      <div className="w-full lg:w-3/4 2xl:w-1/2 lg:px-0 px-4 mx-auto mt-4 flex items-center justify-between">
        <h1 className="text-2xl font-black">
          <FontAwesomeIcon className="mr-3" icon={faPenNib} />
          REVIEW_APP
        </h1>
        <div>
          <Button link="/home/review/create">Make a review</Button>
        </div>
      </div>

      <div className="max-h-full overflow-y-auto 2xl:w-[calc(50%+8rem)] lg:px-16 px-4 w-full lg:w-[calc(60%+8rem)] mx-auto mt-4">
        {children}
      </div>
    </div>
  );
}
