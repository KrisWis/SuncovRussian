import { createRoot } from "react-dom/client";
import "./app/styles/index.scss";
import { App } from "./app/App";
import { ErrorBoundary } from "react-error-boundary";

const container = document.getElementById("root");

if (!container) {
  throw new Error(
    "Контейнер root не найден. НЕ удалось вмонтировать реакт приложение"
  );
}

const root = createRoot(container);

root.render(
  <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <App />
  </ErrorBoundary>
);
