import { useEffect, useState } from "react";
import { Avatars } from "../../constants";

import "./avatars.css";

const AvatarsComponent = () => {
    
    const [ avatarS, setAvatar ] = useState( localStorage.getItem( "avatar" ) || Avatars[0] );

    useEffect(() => {
        if (!Boolean(localStorage.getItem("avatar"))) localStorage.setItem( "avatar", avatarS );
        else setAvatar( localStorage.getItem( "avatar" ));
    }, []);

    const handleAvatar = (avatar) => (e) => {
        localStorage.setItem('avatar', avatar);
    }

    return (
        <div className="avatars-container">
            <span className="title">Selecciona un avatar</span>
            <section className="avatars-options">
                {
                    Avatars.map((item, index) => (
                        <a key={index} className="avatar-option-container"  onClick={handleAvatar(item)}>
                            <img src={item} className="avatar-option" />
                        </a>
                    ))
                }
            </section>
        </div>
    )
}

export default AvatarsComponent;