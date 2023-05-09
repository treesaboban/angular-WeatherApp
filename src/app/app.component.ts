import { Component, OnInit } from '@angular/core';
import { ServiceService } from './services/service.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weatherApp';
  myWeather:any=[]
  name:any;
  country:any
  city:any
  temperature:any=0
  feelsLikeTemp:any=0
  humidity:any;
  pressure:any;
  summary:string=''
  description:string=''
  icon: any = ''
  constructor(private api:ServiceService,private http:HttpClient) {}
  ngOnInit(): void
   {
   }
  weatherdata()
  { 
    {
      this.api.getweather(this.name).subscribe((result)=>{
        console.log(result);
        this.myWeather=result
        this.city=this.myWeather.name.toUpperCase()
        this.country = this.myWeather.sys.country
        this.temperature=Math.floor(this.myWeather.main.temp - 273.15)
        this.feelsLikeTemp=Math.floor(this.myWeather.main.feels_like - 273.15)
        this.humidity=this.myWeather.main.humidity
        this.pressure=this.myWeather.main.pressure
        this.summary=this.myWeather.weather[0].main
        this.description=this.myWeather.weather[0].description 
        this.icon = this.myWeather.weather[0].icon
       });
    }
  }
  getIconUrl(icon: string) {
    return `https://openweathermap.org/img/w/${icon}.png`;
  }
}
