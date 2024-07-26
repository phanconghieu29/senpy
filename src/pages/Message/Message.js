import React from "react";
import List from "./list/List";
import Chat from "./chat/Chat";
import Detail from "./detail/Detail";
import classNames from "classnames/bind";

import styles from './Message.module.scss'

const cx = classNames.bind(styles)

const Message = () => {
    return (
        <div className={cx("container")}>
            <List />
            <Chat />
            <Detail />
        </div>
    );
};

export default Message;
