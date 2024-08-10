import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StickyNavbar from './components/common/Navbar'
import FooterWithLogo from './components/common/Footer'
import Products from './pages/Products'
import ProductForm from './pages/productDesForm'
import SignUpForm from './pages/signUpForm'
import Accounts from './pages/Accounts'


function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<StickyNavbar />

			<Router>
				<div>
					<Routes>
						<Route path="/" element={<Products />} />
						<Route path="/product-form" element={<ProductForm />} />
						<Route path="/signup-form" element={<SignUpForm />} />
						<Route path="/accounts" element={<Accounts />} />
						<Route path='/lend' element={<ProductForm/>}/>
					</Routes>
				</div>
			</Router>

			<FooterWithLogo />
		</>
	)
}

export default App