
/*
歌曲搜索

*/
var app=new Vue({
    el:"#player",
    data:{
        query:"",
        musicList:[],
        musicUrl:"",
        musicCover:"",
        hotComments:[],
        isPlaying:false,
        isShow:false,
        mvUrl:""
    },
    methods:{
        searchMusic:function(){
            var that=this;
            axios.get("https://autumnfish.cn/search?keywords="+this.query)
            .then(function(resopnse){
                //console.log(resopnse);
                that.musicList=resopnse.data.result.songs;
            },function(err){})
        },
        playMusic:function(musicId){

            /*歌曲播放地址*/
           // console.log(musicId);
           var that=this;
           axios.get("https://autumnfish.cn/song/url?id="+musicId)
            .then(function(resopnse){
               // console.log(resopnse.data.data[0].url);
               that.musicUrl=resopnse.data.data[0].url;
            },function(err){})
            /*歌曲封面获取*/
            axios.get("https://autumnfish.cn/song/detail?ids="+musicId)
            .then(function(resopnse){
               // console.log(resopnse.data.songs[0].al.picUrl);
               that.musicCover=resopnse.data.songs[0].al.picUrl;
            },function(err){})
            /*歌曲评论获取*/
            axios.get("https://autumnfish.cn/comment/hot?type=0&id="+musicId)
            .then(function(resopnse){
               // console.log(resopnse.data.songs[0].al.picUrl);
               that.hotComments=resopnse.data.hotComments;
            },function(err){})


        },
        play:function(){
            this.isPlaying=true;
        },
        pause:function(){
            this.isPlaying=false;
        },
        playMv:function(mvid){
            var that=this;
            axios.get("https://autumnfish.cn/mv/url?id="+mvid)
            .then(function(resopnse){
                // console.log(resopnse.data.songs[0].al.picUrl);
                that.isShow=true;
                that.mvUrl=resopnse.data.data.url;
             },function(err){})
        },
        hide:function(){
            this.isShow=false;
            this.mvUrl='';
        }
    }
})

