import React from "react";
import "./App.css";
import {QueryClient, QueryClientProvider} from "react-query";
import {HashRouter} from "react-router-dom";
import {RoutesSwitch} from "Components/RoutesSwitch";

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<HashRouter>
				<RoutesSwitch />
			</HashRouter>
		</QueryClientProvider>
	);
};

export default App;
