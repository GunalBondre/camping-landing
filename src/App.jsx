import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Home = lazy(() => import('./pages/Home'));

function App() {
	return (
		<Suspense fallback='...Loading'>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</Router>
		</Suspense>
	);
}

export default App;
