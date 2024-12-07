import { Suspense } from "react";

export const App = () => {
  return (
    <>
      <Suspense fallback="Идёт загрузка..."></Suspense>
    </>
  );
};
