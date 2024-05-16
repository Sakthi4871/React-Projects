import { BrowserRouter as Router, Route, Routes }from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery"
import Plants from "./pages/Plants"
import About from "./pages/About";
import "./App.css"
import Recommendedplants from "./recommendedplants";
import Navbar from "./Navbar";
import Footer from "./footer";
import Signup from "./signup";
import Signin from "./signin";
import Inquiry from "./inquiry";
import Aloevera from "./plants/aloevera";
import Basil from "./plants/basil";
import Trendingpage from "./trendingpage";
import Indoorplants from "./indoorplants";
import Outdoorplants from "./outdoorplants";
import Profile from "./Profile";
import Peacelily from "./plants/peacelily";



function App() {
	return (

		<>		
		
			<Router>			
				<Navbar />
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="gallery" element={<Gallery />} />
						<Route exact path="plants" element={<Plants />} />
						<Route exact path="about" element={<About />} />
						<Route exact path="recommendedplants" element={<Recommendedplants />}></Route>
						<Route exact path="signup" element={<Signup />}></Route>
						<Route exact path="signin" element={<Signin />}></Route>
						<Route exact path="inquiry" element={<Inquiry />}></Route>
						<Route exact path="aloevera" element={<Aloevera />}></Route>
						<Route exact path="peacelily" element={<Peacelily />}></Route>
						<Route exact path="basil" element={<Basil />}></Route>
						<Route exact path="trendingpage" element={<Trendingpage />}></Route>
						<Route exact path="indoorplants" element={<Indoorplants />}></Route>
						<Route exact path="outdoorplants" element={<Outdoorplants />}></Route>
						<Route exact path="profile" element={<Profile />} />
					</Routes>
				<Footer />
			</Router>
				
		</>
	);
}
export default App;
