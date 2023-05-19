
export default function BgImage({src,props,children}) {

    return (
        <>
        <div {...props} style={{backgroundImage:'url("'+src+'")'}}>
            {children}
        </div>
        </>
    )
}
