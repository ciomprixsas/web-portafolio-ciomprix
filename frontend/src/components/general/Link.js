
export default function Link({content,url}) {
    
    return (
        <>
        <a className='bg-red-100 p-2 m-2' href={url}>{content}</a>
        </>
    );
}
