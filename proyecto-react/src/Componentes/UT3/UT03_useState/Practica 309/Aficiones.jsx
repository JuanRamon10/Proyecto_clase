


const Aficiones = ({valorAficiones})=>{
    
    return(
        <>
            {valorAficiones?.map((v,i,Array)=>{
                return(
                    <><p key={i}>Aficiones:{v}</p></>
                )
                
            })}
        </>

    )
    

}
export default Aficiones ;