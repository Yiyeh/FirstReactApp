
const newMessage = {
    name: 'Yiyeh',
    subtitle: 'soy un subtitulo'
};

 export default function FirstApp() {

    
    return (
        <>
            <h1>{newMessage.name}</h1>
            <p>{newMessage.subtitle}</p>
        </>
    )
}
