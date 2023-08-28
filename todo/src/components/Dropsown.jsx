import { useState } from "react";

const country = [
{
    country:"India",
    city:["Delhi","Lucknow","Patna"]
},
{
    country:"China",
    city:["honkong","shichan","Taiwan"]
},{
    country:"British",
    city:["Landan","Parish","Somthing city"]
}];
export const Dropdwown = ()=>{
    const[countries,setCountry] = useState(country);
    const[cities,setCities] = useState(country[0].city);
    const changeCity = (tar)=>{
        for(let i = 0; i<countries.length; i++){
            if(countries[i].country===tar){
                setCities(countries[i].city);
                break;
            }
        }
    }
    return (
        <div>
            <select name="" id="" onChange={(e)=>{
                // console.log(e.target.value);
                changeCity(e.target.value);
            }}>
            {countries.map(el=><option>{el.country}</option>)}
            </select>
            <select name="" id="">
                {cities.map(el=><option>{el}</option>)}
            </select>
        </div>
    )
}