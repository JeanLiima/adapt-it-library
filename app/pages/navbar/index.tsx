import { Navbar } from "adapt-it-library";

const NavbarPage = () => {
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
		<Navbar options={navOptions} />
	);
};

export { NavbarPage};