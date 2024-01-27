function Member({img, name, role}) {
    return(
        <div>
            <img src={img}/>
            <p>{name}</p>
            <p>{role}</p>
        </div>
        
    );
}

export default Member;

