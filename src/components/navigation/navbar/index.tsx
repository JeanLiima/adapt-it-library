"use client";
import { useState } from "react";

import { HamburgerButton } from "./components/hamburger-button";

import styles from "./styles.module.scss";

interface NavType {
	label: string;
	onClick?: VoidFunction;
}
interface CategoryType {
	name?: string;
	items: Array<NavType>;
}
interface OptionsType extends NavType {
	categories?: Array<CategoryType>;
}
export interface NavbarProps {
	options: Array<OptionsType>;
}

const Navbar = ({ options }: NavbarProps) => {
	const [open, setOpen] = useState<boolean>(false);

	const toggleMenu = () => {
		setOpen((currentValue) => !currentValue);
	};

	return (
		<nav className={styles.navbar} data-open={open}>
			<HamburgerButton open={open} onClick={toggleMenu} />
			<div className={styles.dropdowns}>
				<div className={styles.dropdown}>
					<button>Products</button>
					<div className={styles["dropdown-menu"]}>
						<div className={styles["dropdown-menu-container"]}>
							<h2>Digital</h2>
							<button>Learn CSS Ebook</button>
							<button>Security Course</button>
							<button>Masterclass Bundle</button>
						</div>
					</div>
				</div>
				{options.map((option) => (
					<div className={styles.dropdown} key={option.label}>
						<button onClick={option?.onClick}>{option.label}</button>
						{option?.categories && (
							<div className={styles["dropdown-menu"]}>
								{option.categories.map((category, index) => (
									<div key={index} className={styles["dropdown-menu-container"]}>
										{category?.name && <h2>{category.name}</h2>}
										{category.items.map((item) => (
											<button key={item.label} onClick={item?.onClick}>
												{item.label}
											</button>
										))}
									</div>
								))}
							</div>
						)}
					</div>
				))}
			</div>
		</nav>
	);
};

export { Navbar };
