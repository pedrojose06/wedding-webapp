import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./libs/i18n.ts";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<React.Suspense fallback="loading...">
			<App />
		</React.Suspense>
	</React.StrictMode>,
);
