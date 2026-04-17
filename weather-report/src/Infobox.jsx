import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



export default function Infobox({data}){
  // console.log(data);

  if(Object.keys(data).length > 0){

    if(data.cod!='404'){

      return(
        <Card sx={{ maxWidth: 400 }}>
     <CardMedia
       sx={{ height: 200 }}
       image="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
       title="green iguana"
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
        {data.name}
       </Typography>
       <Typography variant="body5" color="text.secondary">
         Cordinate Axis : {data.coord.lat}--{data.coord.lon}
         <br />
         feels Like: {Math.round(data.main.feels_like-273.15)} Degree Celcius
         <br />
         Humidity:   {data.main.humidity}%
        <br />
         Temprature: {Math.round(data.main.temp-273.15)} Degree Celcius
       </Typography>
     </CardContent>
     
   </Card>
   )
  }else{
    return(
      <Card sx={{ maxWidth: 400 }}>
   <CardMedia
     sx={{ height: 250}}
     image="https://t3.ftcdn.net/jpg/01/01/89/46/360_F_101894688_RVSZUtDfPR6Cr5eBDQI7Qo5pZ01jmyK3.jpg"
     title="green iguana"
   />
   <CardContent>
     <Typography gutterBottom variant="h5" component="div">
      Location Not Found!
     </Typography>
     <Typography variant="body5" color="text.secondary">
      Opps! The Location You Are Trying To Find Is Not In Our Database
     </Typography>
   </CardContent>
   
 </Card>
 )
  }  
 }
}