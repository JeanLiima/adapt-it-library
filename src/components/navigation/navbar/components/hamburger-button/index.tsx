import type { ButtonHTMLAttributes } from "react";

import styles from "./styles.module.scss";

interface HamburgerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	open: boolean;
}

const HamburgerButton = ({ open, ...props }: HamburgerButtonProps) => (
	<button className={styles["hamburger-button"]} data-open={open} {...props}>
		<div className={styles["hamburger-button-container"]}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</button>
);

export { HamburgerButton };
