

var api_key = "RGAPI-b688f351-01ed-4b5c-ba62-107822733b53";
function summonerLookUp(){
var summonername = $("#search").val();

    $.ajax({
        method: "GET",
        url: "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +summonername+ "?api_key=" + api_key,
        dataType: "json"
    }).done(function (msg) {
    console.log(msg);
    var summonerID = msg.id;
    var datenum = parseInt(msg.revisionDate);
    var date = new Date(datenum);
    var dateString = date.toString();
    detailsummoner(summonerID);
    $(".profileIcon").html("<img src=http://ddragon.leagueoflegends.com/cdn/10.16.1/img/profileicon/"+msg.profileIconId+".png>" + "\n");

    $(".class1").html("<strong>" + "소환사명: " + "</strong>" + msg.name  + "\n");
    $(".class1").append("<strong>" + "레벨: " + "</strong>" + msg.summonerLevel + "\n");
    $(".class1").append("<strong>" + "최근 접속일: " +  "</strong>" + dateString + "\n\n");
})
};
function detailsummoner(summonerID){
    $.ajax({
        method: "GET",
        url: "https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/" +summonerID+"?api_key=" + api_key,
        dataType: "json"
    }).done(function (msg){
        console.log(msg);
        $(".class2").html("<strong>개인랭크" + msg[0].queueType +  "</strong>" + "\n");
        $(".class2").append("<img src= tier-icons/tier-icons/"+msg[0].tier + "_" +msg[0].rank + ".png>" + "\n");
        $(".class2").append("<strong>" + "티어: " +  "</strong>" + msg[0].tier + "\n");
        $(".class2").append("<strong>" + "랭크: " +  "</strong>" + msg[0].rank + "\n");
        $(".class2").append("<strong>" + "리그포인트: " +  "</strong>" + msg[0].leaguePoints+ "\n");
        $(".class2").append("<strong>" + "승/패: " +  "</strong>" + msg[0].wins+ "/" + msg[0].losses + "\n\n");
        $(".class2").append("<strong>자유랭크" + msg[1].queueType +  "</strong>" + "\n");
        $(".class2").append("<img src= tier-icons/tier-icons/"+msg[1].tier + "_" +msg[1].rank + ".png>" + "\n");
        $(".class2").append("<strong>" + "티어: " +  "</strong>" + msg[1].tier + "\n");
        $(".class2").append("<strong>" + "랭크: " +  "</strong>" + msg[1].rank + "\n");
        $(".class2").append("<strong>" + "리그포인트: " +  "</strong>" + msg[1].leaguePoints + "\n");
        $(".class2").append("<strong>" + "승/패: " +  "</strong>" + msg[1].wins+ "/" + msg[1].losses + "\n\n");

    })
}