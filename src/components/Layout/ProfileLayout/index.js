import Header from "../components/Header";

function ProfileLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="content">{children}</div>
        </div>
    );
}

export default ProfileLayout;
