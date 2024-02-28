import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import SkeletonLoader from "./components/SkeletonLoader/SkeletonLoader.tsx";
import "./index.css";
import "./libs/i18n.ts";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<React.Suspense
			fallback={
				<div className="p-4">
					<SkeletonLoader count={1} height={250} />
					<SkeletonLoader count={3} height={40} width="50%" className="mt-7" />
					<SkeletonLoader count={1} height={70} className="mt-7" />
				</div>
			}
		>
			<App />
		</React.Suspense>
	</React.StrictMode>,
);
