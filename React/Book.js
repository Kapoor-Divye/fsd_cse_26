export default function Book(props){
    const image=React.createElement("img",
        {src:props.image,width: "100px",height:"100px"},null);
    const title=React.createElement("h2",
           {style:{color: "red"}},"Title:"+props.title)
    const price=React.createElement("h2",
           {style:{color: "Green"}},"Price:"+props.price+"/-")
    const btn=React.createElement("button",
           {style:{color: "blue"}},"AddToCart")
    const div=React.createElement("div",
        {className:"book"},[image,title,price,btn])
    return div;0                      
}