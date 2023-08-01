import React from 'react'

function Menu() {
	return (
		<div>
			<div className="links">
				<NavLink to="/">Asosiy</NavLink>
				<NavLink to="/bizhaqimizda">Biz haqimizda</NavLink>
				<NavLink to="/mahsulotlar">Mahsulotlar</NavLink>
				<NavLink to="/yangiliklar">Yangiliklar</NavLink>
				<NavLink to="/kareyra">Kareyra</NavLink>
				<NavLink to="/hamkorlik">Hamkorlik</NavLink>
			</div>
		</div>
	)
}

export default Menu