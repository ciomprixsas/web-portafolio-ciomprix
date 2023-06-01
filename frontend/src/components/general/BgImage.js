export const BASE_URL = process.env.REACT_APP_URL;

export default function BgImage({src,className,children,width}) {

    return (
        <>
        <div className={className} style={{backgroundImage:`url(${src})`,width:width}} >
            {children}
        </div>
        </>
    )
}
