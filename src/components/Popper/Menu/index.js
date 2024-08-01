import React from "react";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function Menu({children}) {
    return (
        <Tippy
            interactive
            render={(attrs) => (
                <div className={cx("user-wrapper")}>
                    <PopperWrapper>Hello</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
