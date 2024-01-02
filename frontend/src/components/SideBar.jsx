import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";


function SideBar() {
    const location = useLocation();
    const [isHovered, setIsHovered] = useState({
        home   : false,
        search : false,
        message: false,
        save   : false,
        profile: false,
        more   : false
    });

    const handleMouseEnter = (button) => {
        setIsHovered(prevState => ({...prevState, [button]: true}));
    };

    const handleMouseLeave = (button) => {
        setIsHovered(prevState => ({...prevState, [button]: false}));
    };


    useEffect(() => {
        console.log(location);
    }, [location]);

    return (
        <>
            <div
                className="h-full w-64 py-6 bg-white dark:bg-gray-900 border-r dark:border-gray-800 fixed left-0 top-0 overflow-auto">
                <div className="px-8">
                    <div className="flex items-center justify-center mb-8">
                        <InstagramIcon className="h-8 w-8"/>
                    </div>
                    <div className="space-y-2">
                        <button
                            onMouseEnter={() => handleMouseEnter('home')}
                            onMouseLeave={() => handleMouseLeave('home')}
                            className="flex items-center space-x-2 hover:bg-gray-200 rounded py-3 pr-28">
                            <HomeIcon className={`h-5 w-5 ${isHovered.home ? "scale-110" : ""} transition-transform`}/>
                            <span>Home</span>
                        </button>
                        <button
                            onMouseEnter={() => handleMouseEnter('search')}
                            onMouseLeave={() => handleMouseLeave('search')}
                            className="flex items-center space-x-2 hover:bg-gray-200 rounded py-3 pr-28">
                            <SearchIcon
                                className={`h-5 w-5 ${isHovered.search ? "scale-110" : ""} transition-transform`}/>
                            <span>Search</span>
                        </button>
                        <button
                            onMouseEnter={() => handleMouseEnter('message')}
                            onMouseLeave={() => handleMouseLeave('message')}
                            className="flex items-center space-x-2 hover:bg-gray-200 rounded py-3 pr-28">
                            <MessageCircleIcon
                                className={`h-5 w-5 ${isHovered.message ? "scale-110" : ""} transition-transform`}/>
                            <span>Message</span>
                        </button>
                        <button
                            onMouseEnter={() => handleMouseEnter('save')}
                            onMouseLeave={() => handleMouseLeave('save')}
                            className="flex items-center space-x-2 hover:bg-gray-200 rounded py-3 pr-28">
                            <SaveIcon className={`h-5 w-5 ${isHovered.save ? "scale-110" : ""} transition-transform`}/>
                            <span>Create</span>
                        </button>
                        <button
                            onMouseEnter={() => handleMouseEnter('profile')}
                            onMouseLeave={() => handleMouseLeave('profile')}
                            className="flex items-center space-x-2 hover:bg-gray-200 rounded py-3 pr-28">
                            <UserIcon
                                className={`h-5 w-5 ${isHovered.profile ? "scale-110" : ""} transition-transform`}/>
                            <span>Profile</span>
                        </button>
                        <button
                            onMouseEnter={() => handleMouseEnter('more')}
                            onMouseLeave={() => handleMouseLeave('more')}
                            className="flex items-center space-x-2 hover:bg-gray-200 rounded py-3 pr-28">
                            <MoreHorizontalIcon
                                className={`h-5 w-5 ${isHovered.more ? "scale-110" : ""} transition-transform`}/>
                            <span>More</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}


function HomeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
    )
}


function InstagramIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
    )
}


function MessageCircleIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>
        </svg>
    )
}


function MoreHorizontalIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="1"/>
            <circle cx="19" cy="12" r="1"/>
            <circle cx="5" cy="12" r="1"/>
        </svg>
    )
}


function SaveIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
            <polyline points="17 21 17 13 7 13 7 21"/>
            <polyline points="7 3 7 8 15 8"/>
        </svg>
    )
}


function SearchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
        </svg>
    )
}


function UserIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
        </svg>
    )
}

export default SideBar;
