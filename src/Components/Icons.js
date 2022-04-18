export default function Icon({name,size = 15,color="black"}) {
  return (
    <i className={'fas fab fa fa-'+name} style={{fontSize:size,color}}></i>
  )
}
