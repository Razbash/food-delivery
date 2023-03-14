const CardIcon = () => {
    return(
        <svg viewBox="0 0 32 32" className="card-icon icon">
            <path d="M30,4H2A2,2,0,0,0,0,6V26a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V6A2,2,0,0,0,30,4Zm0,22H2V6H30Z"/>
            <path d="M7,14H9a3,3,0,0,0,3-3A3,3,0,0,0,9,8H7a3,3,0,0,0-3,3A3,3,0,0,0,7,14Z"/>
            <path d="M25,14a3,3,0,1,0-3-3A3,3,0,0,0,25,14Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,25,10Z"/>
            <rect height="2" width="24" x="4" y="17"/>
            <rect height="2" width="2" x="4" y="21"/>
            <rect height="2" width="2" x="8" y="21"/>
            <rect height="2" width="4" x="24" y="21"/>
        </svg>
    )
}

export default CardIcon;