var app=new Vue({
    el:"#app",
    data:{
        city:'',
        weatherList:[],
        hotCity:['北京','上海','深圳','广州']
    },
    methods:{
        searchWeather:function(){
           // console.log("211");
            //console.log(this.city);
            var that=this;
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city="+this.city)
            .then(function(response){
                //console.log(response.data.data.forecast);
                that.weatherList=response.data.data.forecast;
            },function(err){
                alert("输入城市名称有误");
                console.log(err);
            })

        },
        changeCity:function(city){
            this.city=city;
            this.searchWeather();
        }

    }

})