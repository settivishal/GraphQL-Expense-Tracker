import { Routes, Route } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Toaster from "react-hot-toast";

import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import TransactionPage from "./pages/TransactionPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

import Header from "./components/ui/Header";

import GET_AUTHENTICATED_USER from "./graphql/queries/user.query.js";

function App() {
  const { loading, data, error } = useQuery(GET_AUTHENTICATED_USER);

  console.log(loading, data, error);

	return (
		<>
			{data?.authUser && <Header />}
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/signup' element={<SignUpPage />} />
				<Route path='/transaction/:id' element={<TransactionPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
      <Toaster />
		</>
	);
}
export default App;