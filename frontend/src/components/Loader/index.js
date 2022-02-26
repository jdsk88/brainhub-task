import { Suspense } from "react";
import Loader from "./Loader";

const LazyLoader = (ToLoad) => (props) =>
  (
    <Suspense fallback={<Loader />}>
      <ToLoad {...props} />
    </Suspense>
  );

export default LazyLoader;
