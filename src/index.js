import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './pages/Layout.js';
import Home from "./pages/Home.js";
import Ingredients from './pages/Ingredients.js';
import IngredientSalad from './pages/SaladDressing.js';
import Fats from './pages/Soup/Fats.js';
import Arom from './pages/Soup/Arom.js';
import Protein from './pages/Soup/Protein.js';
import Vegetables from './pages/Soup/Vegetables.js';
import Boosters from './pages/Soup/Boosters.js';
import Salad from './pages/Salad.js';
import Liquid from './pages/Soup/Liquid.js';
import Extras from './pages/Soup/Extras.js';
import Garnish from './pages/Soup/Garnish.js';
import Bread from './pages/Bread.js';
import Fry from './pages/Fry.js';
import RoastedVeg from './pages/RoastedVeg.js';
import Oil from './pages/SaladDressing/Oil.js';
import Acid from './pages/SaladDressing/Acid.js';
import Sweet from './pages/SaladDressing/Sweet.js';
import Herbs from './pages/SaladDressing/Herbs.js';
import Mustard from './pages/SaladDressing/Mustard.js';
import Yeast from './pages/BreadIng/Yeast.js';
import BreadOil from './pages/BreadIng/BreadOil.js';
import HoneyB from './pages/BreadIng/HoneyB.js';
import Flour from './pages/BreadIng/Flour.js';
import Greens from './pages/Salad/Greens.js';
import SaladVeg from './pages/Salad/SaladVeg.js';
import SaladCheese from './pages/Salad/SaladCheese.js';
import SaladProtein from './pages/Salad/SaladProtein.js';
import SaladHerbs from './pages/Salad/SaladHerbs.js';
import Seeds from './pages/Salad/Seeds.js';
import SaladSauce from './pages/Salad/SaladSauce.js';
import OilFry from './pages/Fry/OilFry.js';
import ProtFry from './pages/Fry/ProtFry.js';
import VegeFry from './pages/Fry/VegeFry.js';
import FryArom from './pages/Fry/FryArom.js';
import SauceFry from './pages/Fry/SauceFry.js';
import RiceFry from './pages/Fry/RiceFry.js';
import FryGarn from './pages/Fry/FryGarn.js';
import VegeOpt from './pages/Roasted/VegeOpt.js';
import VegeOil from './pages/Roasted/VegeOil.js';
import VegeArom from './pages/Roasted/VegeArom.js';
import VegeHerbs from './pages/Roasted/VegeHerbs.js';
import VegeSalt from './pages/Roasted/VegeSalt.js';
import ScrollToTopOnPageChange from './comps/ScrollToTopOnPageChange.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"


//SETTING THE ROUTING FOR THE APP


function App() {
	return (
		<BrowserRouter>
			<ScrollToTopOnPageChange />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/soup"  element={<Ingredients />}/> 
					<Route path="/Salad-Dressing"  element={<IngredientSalad />}/> 
					<Route path="/fats"  element={<Fats />}/> 
					<Route path="/aromatics"  element={<Arom />}/> 
					<Route path="/vegetables"  element={<Vegetables />}/> 
					<Route path="/protein"  element={<Protein />}/> 
					<Route path="/boosters"  element={<Boosters />}/> 
					<Route path="/liquid"  element={<Liquid />}/> 
					<Route path="/extras"  element={<Extras />}/> 
					<Route path="/garnish"  element={<Garnish />}/> 
					<Route path="/oil"  element={<Oil />}/> 
					<Route path="/acid"  element={<Acid />}/> 
					<Route path="/sweetener"  element={<Sweet />}/> 
					<Route path="/herbs"  element={<Herbs />}/> 
					<Route path="/mustard"  element={<Mustard />}/> 
					<Route path="/bread"  element={<Bread />}/> 
					<Route path="/yeast"  element={<Yeast />}/> 
					<Route path="/BreadOil"  element={<BreadOil />}/> 
					<Route path="/HoneyBread"  element={<HoneyB />}/> 
					<Route path="/flour"  element={<Flour />}/> 
					<Route path="/salad"  element={<Salad />}/> 
					<Route path="/green"  element={<Greens />}/> 
					<Route path="/SaladVegetables"  element={<SaladVeg />}/> 
					<Route path="/SaladProtein"  element={<SaladProtein />}/> 
					<Route path="/SaladCheese"  element={<SaladCheese />}/> 
					<Route path="/SaladHerbs"  element={<SaladHerbs />}/> 
					<Route path="/Seeds"  element={<Seeds />}/> 
					<Route path="/SaladSauce"  element={<SaladSauce />}/> 
					<Route path="/StirFry"  element={<Fry />}/> 
					<Route path="/OilFry"  element={<OilFry />}/> 
					<Route path="/ProtFry"  element={<ProtFry />}/> 
					<Route path="/VegeFry"  element={<VegeFry />}/> 
					<Route path="/FryArom"  element={<FryArom />}/> 
					<Route path="/SauceFry"  element={<SauceFry />}/> 
					<Route path="/RiceFry"  element={<RiceFry />}/> 
					<Route path="/FryGarn"  element={<FryGarn />}/> 
					<Route path="/roasted-vegetables"  element={<RoastedVeg />}/> 
					<Route path="/vegetable-options"  element={<VegeOpt />}/> 
					<Route path="/Vegetable-Oil"  element={<VegeOil />}/> 
					<Route path="/Vegetable-Aromatics"  element={<VegeArom />}/> 
					<Route path="/Vegetable-Herbs"  element={<VegeHerbs />}/> 
					<Route path="/salt-pepper"  element={<VegeSalt />}/> 
				</Route>
				
			</Routes>
		</BrowserRouter>
		
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
