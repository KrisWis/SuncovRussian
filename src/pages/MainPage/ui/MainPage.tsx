import "./MainPage.scss";
import { memo } from "react";

export const MainPage: React.FC = memo((): React.JSX.Element => {
  return (
    <main className="Page MainPage__main">
      <div className="padding"></div>
    </main>
  );
});

MainPage.displayName = "MainPage";
