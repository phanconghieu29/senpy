import React from "react";
import classNames from "classnames/bind";

import styles from "./NameCard.module.scss";

const cx = classNames.bind(styles);

const img = "https://picsum.photos/130/130?image=839";

// const NameCard = ({ name, title, img, social }) => {
const NameCard = ({ mentor, mentor_specialty }) => {
    return (
        <div className={cx("our-team")}>
            <div className={cx("picture")}>
                <img className={cx("img-fluid")} src={img} alt={mentor} />
            </div>
            <div className={cx("team-content")}>
                <h3 className={cx("name")}>{mentor}</h3>
                <h4 className={cx("title")}>{mentor_specialty}</h4>
            </div>
            {/* <ul className={cx("social")}>
                {social.map((link) => (
                    <li key={link.url}>
                        <a href={link.url}>
                            <img
                                className={`fa fa-${link.icon}`}
                                alt=""
                                aria-hidden="true"
                            />
                        </a>
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default NameCard;


// [
//   {
//       name: "Michele Miller",
//       title: "Web Developer",
//       img: "https://picsum.photos/130/130?image=1027",
//       social: [
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-facebook",
//           },
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-twitter",
//           },
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-google-plus",
//           },
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-linkedin",
//           },
//       ],
//   },
//   {
//       name: "Patricia Knott",
//       title: "Web Developer",
//       img: "https://picsum.photos/130/130?image=839",
//       social: [
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-facebook",
//           },
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-twitter",
//           },
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-google-plus",
//           },
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-linkedin",
//           },
//       ],
//   },
//   {
//       name: "Justin Ramos",
//       title: "Web Developer",
//       img: "https://picsum.photos/130/130?image=856",
//       social: [
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-facebook",
//           },
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-twitter",
//           },
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-google-plus",
//           },
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-linkedin",
//           },
//       ],
//   },
//   {
//       name: "Mary Huntley",
//       title: "Web Developer",
//       img: "https://picsum.photos/130/130?image=836",
//       social: [
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-facebook",
//           },
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-twitter",
//           },
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-google-plus",
//           },
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-linkedin",
//           },
//       ],
//   },
//   {
//       name: "Michele Miller",
//       title: "Web Developer",
//       img: "https://picsum.photos/130/130?image=1027",
//       social: [
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-facebook",
//           },
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-twitter",
//           },
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-google-plus",
//           },
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-linkedin",
//           },
//       ],
//   },
//   {
//       name: "Patricia Knott",
//       title: "Web Developer",
//       img: "https://picsum.photos/130/130?image=839",
//       social: [
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-facebook",
//           },
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-twitter",
//           },
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-google-plus",
//           },
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-linkedin",
//           },
//       ],
//   },
//   {
//       name: "Justin Ramos",
//       title: "Web Developer",
//       img: "https://picsum.photos/130/130?image=856",
//       social: [
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-facebook",
//           },
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-twitter",
//           },
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-google-plus",
//           },
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-linkedin",
//           },
//       ],
//   },
//   {
//       name: "Mary Huntley",
//       title: "Web Developer",
//       img: "https://picsum.photos/130/130?image=836",
//       social: [
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-facebook",
//           },
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-twitter",
//           },
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-google-plus",
//           },
//           {
//               href: "https://codepen.io/collection/XdWJOQ/",
//               icon: "fa-linkedin",
//           },
//       ],
//   },
// ];