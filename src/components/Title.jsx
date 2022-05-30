export default function Title ({nombre}){
    console.log(nombre);
    return (
        <div>
            <h1>{`The best city is ${nombre[0].name}`}</h1>
        </div>
    )
}