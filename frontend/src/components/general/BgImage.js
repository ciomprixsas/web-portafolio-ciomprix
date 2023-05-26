
export default function BgImage({src,className,children}) {

    return (
        <>
        <div className={className} style={{backgroundImage:`url(${src})`}} >
            {children}
        </div>
        </>
    )
}
