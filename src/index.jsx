import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App"; // Make sure you have a store file

import "./styles/style.css";
import store from "./states";

const root = createRoot(document.getElementById("root"));

// Wrapping App with store provider
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<StrictMode>
				<App />
			</StrictMode>
		</BrowserRouter>
	</Provider>
);
