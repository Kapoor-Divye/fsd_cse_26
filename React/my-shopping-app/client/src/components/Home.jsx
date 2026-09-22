import Items from "./Items"


const Home = () => {
  const Itemdata=[
    {Image:"",title:"Tablet", price: 24465},
    {Image:"",title:"Windows", price: 53315},
    {Image:"",title:"Mac", price: 150753},
    {Image:"",title:"Clothes", price: 1465},
    {Image:"",title:"Shoes", price: 1315},
    {Image:"",title:"Watch", price: 1753},
  ]
  return (
    <div className="home">
    {
      Itemdata.map((item,index)=>{
         return <Items key={index} props={item}/>
      })
    } 
    </div>
  )
}

export default Home