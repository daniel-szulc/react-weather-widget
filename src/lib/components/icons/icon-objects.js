import React from 'react';

const Cloud = () => {
    return (
        <div className="Cloud">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 354.91 238.97">
                <defs>
                    <linearGradient id="cloud-gradient" x2="0.35" y2="1">
                        <stop offset="0%" stopColor="var(--color-stop)" />
                        <stop offset="30%" stopColor="var(--color-stop)" />
                        <stop offset="100%" stopColor="var(--color-bot)" />
                    </linearGradient>
                    <linearGradient id="cloud-night-gradient" x2="0.35" y2="1">
                        <stop offset="0%" stopColor="var(--color-stop)" />
                        <stop offset="30%" stopColor="var(--color-stop)" />
                        <stop offset="100%" stopColor="var(--color-bot)" />
                    </linearGradient>
                </defs>
                <path className="efa440e5-ff89-43a8-b14a-3fda7f6f200c"
                      d="M328.74,191c0-.5,0-1,0-1.5A86.74,86.74,0,0,0,157.45,170.2a56.63,56.63,0,0,0-84.27,49.46c0,1.28,0,2.55.14,3.81A61,61,0,0,0,94.55,341.7H312.17A76.28,76.28,0,0,0,328.74,191Z"
                      transform="translate(-33.53 -102.73)"/>
            </svg>
        </div>
    );
}

const Sun = () => {
    return (
        <div className="Sun">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="sun-gradient" x2="0.35" y2="1">
                        <stop offset="0%" stopColor="var(--color-stop)" />
                        <stop offset="30%"  stopColor="var(--color-stop)" />
                        <stop offset="100%"  stopColor="var(--color-bot)" />
                    </linearGradient>
                    <linearGradient id="moon-gradient" x2="0.35" y2="1">
                        <stop offset="0%" stopColor="var(--color-stop)" />
                        <stop offset="30%"  stopColor="var(--color-stop)" />
                        <stop offset="100%"  stopColor="var(--color-bot)" />
                    </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="50" />
            </svg>
        </div>
    );
}

const Flash = () => {
    return (
        <div className="Flash">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.68 100">
                <defs>
                    <linearGradient  id="thunder-gradient" x2="0.35" y2="1">
                        <stop className="gradient__brand" offset="0%" stopColor="var(--color-stop)" />
                        <stop className="gradient__brand" offset="30%"  stopColor="var(--color-stop)" />
                        <stop className="gradient__brand-secondary" offset="100%"  stopColor="var(--color-bot)" />
                    </linearGradient>
                </defs>
                <path d="M50.39,38.21a.54.54,0,0,0-.21-.05H32.65a.51.51,0,0,1-.5-.49.47.47,0,0,1,0-.17L45.07.68A.51.51,0,0,0,44.78,0a.5.5,0,0,0-.59.18L.05,61.11a.51.51,0,0,0,.24.68.5.5,0,0,0,.21.05H18a.52.52,0,0,1,.51.49.86.86,0,0,1,0,.17L5.61,99.32a.5.5,0,0,0,.29.65.49.49,0,0,0,.58-.18l44.15-60.9A.52.52,0,0,0,50.39,38.21Z"/></svg>
           </div>
    );
}


const Snowflake = () => {
    return (
        <div className="Snowflake">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.34 100">
                <defs>
                    <linearGradient  id="snowflake-gradient" x2="0.35" y2="1">
                        <stop offset="0%" stopColor="var(--color-stop)" />
                        <stop offset="30%"  stopColor="var(--color-stop)" />
                        <stop  offset="100%"  stopColor="var(--color-bot)" />
                    </linearGradient>
                </defs>
                <path d="M91.06,55.42a3.36,3.36,0,0,0-4.41-1.76l-16,6.89L52.38,50,70.66,39.45l16,6.89a3.51,3.51,0,0,0,1.33.27,3.36,3.36,0,0,0,1.33-6.44L77.9,35.26l9.84-5.68a3.35,3.35,0,0,0-3.35-5.81l-9.84,5.68L76,17.12a3.36,3.36,0,0,0-6.67-.78l-2,17.3L49,44.19V23.08L63,12.67a3.36,3.36,0,0,0-4-5.38L49,14.71V3.35a3.36,3.36,0,0,0-6.71,0V14.71l-10-7.42a3.36,3.36,0,1,0-4,5.38l14,10.41V44.19L24,33.64l-2-17.3a3.35,3.35,0,0,0-6.66.78l1.45,12.33L7,23.77a3.36,3.36,0,0,0-3.36,5.81l9.84,5.68L2,40.17a3.36,3.36,0,0,0,1.33,6.44,3.43,3.43,0,0,0,1.32-.27l16-6.89L39,50,20.68,60.55l-16-6.89A3.36,3.36,0,1,0,2,59.83l11.4,4.91L3.59,70.42a3.36,3.36,0,0,0,1.68,6.26A3.41,3.41,0,0,0,7,76.23l9.84-5.68L15.34,82.88a3.35,3.35,0,0,0,2.94,3.72,2.56,2.56,0,0,0,.39,0,3.36,3.36,0,0,0,3.33-3l2-17.3L42.31,55.81V76.92l-14,10.41a3.36,3.36,0,1,0,4,5.38l10-7.42V96.65a3.36,3.36,0,0,0,6.71,0V85.29l10,7.42a3.36,3.36,0,0,0,4-5.38L49,76.92V55.81L67.3,66.36l2,17.3a3.36,3.36,0,0,0,3.33,3l.4,0A3.35,3.35,0,0,0,76,82.88L74.55,70.55l9.84,5.68a3.35,3.35,0,1,0,3.35-5.81L77.9,64.74l11.41-4.91A3.36,3.36,0,0,0,91.06,55.42Z"/>
            </svg>
        </div>
    );
}

const Mist = () => {
    return (
        <div className="Mist">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 90.91 30.23">
                <defs>
                    <linearGradient id="fog-gradient" x1="28.4" y1="-15.66" x2="52.63" y2="14.46"
                                    gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="var(--color-stop)"/>
                        <stop offset="1" stopColor="var(--color-bot)"/>
                    </linearGradient>
                    <linearGradient id="mist-gradient1" x1="6.26" y1="2.16" x2="30.5" y2="32.27"
                                    href="#b090743d-feb1-4da5-9ffe-cf83aad8a642"/>
                    <linearGradient id="mist-gradient2" x1="31.42" y1="-18.09" x2="55.66" y2="12.03"
                                    href="#b090743d-feb1-4da5-9ffe-cf83aad8a642"/>
                    <linearGradient id="mist-gradient3" x1="4.33" y1="3.71" x2="28.56" y2="33.83"
                                    href="#b090743d-feb1-4da5-9ffe-cf83aad8a642"/>
                    <linearGradient id="mist-gradient4" x1="42.93" y1="-27.35" x2="67.17" y2="2.76"
                                    href="#b090743d-feb1-4da5-9ffe-cf83aad8a642"/>
                    <linearGradient id="mist-gradient5" x1="13.25" y1="-3.47" x2="37.49" y2="26.65"
                                    href="#b090743d-feb1-4da5-9ffe-cf83aad8a642"/>
                </defs>
                <path className="a3e6cfde-cab7-4f6c-b8ac-9f83d8843764"
                      d="M75.47,30.23H50.35a3,3,0,0,1,0-6H75.47a3,3,0,0,1,0,6Z"/>
                <path className="b689477f-c4fb-4828-a7a9-ab21faa4600e"
                      d="M37.45,30.23h-22a3,3,0,0,1,0-6h22a3,3,0,0,1,0,6Z"/>
                <path className="a933b6c9-c208-4ab8-9103-919d7aa10409"
                      d="M83.65,17.82H32.17a3,3,0,0,1,0-6H83.65a3,3,0,0,1,0,6Z"/>
                <path className="bad8042d-1f3a-4e6a-b2f3-67dcbc5592a1"
                      d="M19.27,17.82h-12a3,3,0,0,1,0-6h12a3,3,0,1,1,0,6Z"/>
                <path className="a24a9706-0d3c-498c-93f2-35fc82bf5d52"
                      d="M87.91,6H46.8a3,3,0,0,1,0-6H87.91a3,3,0,0,1,0,6Z"/>
                <path className="b7ef967c-38df-41d0-a377-f54ae1aec3a6"
                      d="M33.91,6H3A3,3,0,0,1,3,0H33.91a3,3,0,0,1,0,6Z"/>
            </svg>
        </div>
    );
}


export {Sun, Cloud, Flash, Snowflake, Mist};