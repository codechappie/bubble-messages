"use client"
import { useEffect, useRef, useState } from "react";
import styles from "./toolmenu.module.scss";


const ToolMenu = ({ screenRef }) => {
    const [showToolMenu, setShowToolMenu] = useState(true);
    const [background, setBackground] = useState('#0ff007');

    useEffect(() => {
        if (screenRef.current) {
            screenRef.current.style.setProperty('--general-background', background);
        }
    }, [background]);


    const cambiarBackground = (color) => {
        setBackground(color);
    };

    return (
        <div className={styles.toolMenu}>
            <div className={`${styles.showToolMenu} ${!showToolMenu ? styles.hidden : ''}`} onClick={() => setShowToolMenu(!showToolMenu)}>
                <button
                    onClick={() => setShowToolMenu(!showToolMenu)} >
                    {showToolMenu ?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msfilter: "" }}
                        >
                            <path d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558-2.28-2.28c.19-.39.308-.819.308-1.278 0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5-.302.692-1.166 2.342-2.954 3.558z" />
                        </svg>
                        :
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msfilter: "" }}
                        >
                            <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z" />
                            <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z" />
                        </svg>
                    }
                </button>
            </div>
            <div className={`${styles.container} ${showToolMenu ? styles.show : ''}`}>
                <div className={styles.chooseBgColor}>
                    <label htmlFor="colorPicker">Choose a color:</label>
                    <div className={styles.picker}>
                        <input id="colorPicker" type="color" onChange={(e) => cambiarBackground(e.target.value)} />
                    </div>
                </div>
                <div className={styles.maxWidth}>
                    <label htmlFor="">Set max width:</label>
                    <div className={styles.buttons}>
                        <button>10%</button>
                        <button>25%</button>
                        <button>50%</button>
                        <button>100%</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToolMenu;