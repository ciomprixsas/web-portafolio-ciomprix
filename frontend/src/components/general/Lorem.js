//Uso de libreria React Lorem Ipsum: https://www.npmjs.com/package/react-lorem-ipsum
import { loremIpsum, name, surname, fullname, username } from 'react-lorem-ipsum'

/*____________________________________________________
PROPS
long: Entero que define la longitud del texto en numero de letras 
________________________________________________________________*/

 const Lorem = ({long}) => {

    const lorem = (l) =>{
        let text=loremIpsum()[0]
        let returnText=''
    
        for(let i=0;i<l;i++){
          returnText+=text.charAt(i)
        }
        return returnText
    }
    return (
        <>
        {lorem(long)}
        </>
    )
}

export default Lorem