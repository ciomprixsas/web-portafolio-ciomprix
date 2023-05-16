
export default function BgImage({src,styles,children}) {
    
    return (
        <>
        <div className={styles} style={{backgroundImage:'url("'+src+'")'}}>
            {children}
        </div>
        </>
    );
}
