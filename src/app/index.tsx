import { Navbar } from "../components";

import styles from "./styles.module.scss";

const App = () => {
	const handleOnClick = () => {
		console.log("clicado");
	};

	const navOptions = [
		{
			label: "Home",
			onClick: handleOnClick,
		},
		{
			label: "Products",
			categories: [
				{
					name: "Digital",
					items: [
						{
							label: "Televisions",
						},
						{
							label: "Cellphones",
							onClick: handleOnClick,
						},
						{
							label: "Home theaters",
							onClick: handleOnClick,
						},
					],
				},
				{
					name: "Moveis",
					items: [
						{
							label: "Shoves",
						},
						{
							label: "Sofas",
							onClick: handleOnClick,
						},
					],
				},
			],
		},
		{
			label: "Services",
			categories: [
				{
					items: [
						{
							label: "Televisions",
						},
						{
							label: "Cellphones",
							onClick: handleOnClick,
						},
						{
							label: "Home theaters",
							onClick: handleOnClick,
						},
					],
				},
			],
		},
	];

	const handleOnClick = () => {
		console.log("clicado");
	};

	const navOptions = [
		{
			label: "Home",
			onClick: handleOnClick,
		},
		{
			label: "Products",
			categories: [
				{
					name: "Digital",
					items: [
						{
							label: "Televisions"
						},
						{
							label: "Cellphones",
							onClick: handleOnClick,
						},
						{
							label: "Home theaters",
							onClick: handleOnClick,
						}
					]
				},
				{
					name: "Moveis",
					items: [
						{
							label: "Shoves"
						},
						{
							label: "Sofas",
							onClick: handleOnClick,
						}
					]
				},
			]
		},
		{
			label: "Services",
			categories: [
				{
					items: [
						{
							label: "Televisions"
						},
						{
							label: "Cellphones",
							onClick: handleOnClick,
						},
						{
							label: "Home theaters",
							onClick: handleOnClick,
						}
					]
				},
			]
		}
	];

	return (
		<div className={styles.app}>
			<Navbar options={navOptions} />
		</div>
	);
};

export default App;
