import React from "react";
import {QueryClient, QueryClientProvider} from "react-query";
import {BrowserRouter as Router} from "react-router-dom";
import {RoutesSwitch} from "Components/RoutesSwitch";

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<RoutesSwitch />
			</Router>
		</QueryClientProvider>
	);
};

export default App;
