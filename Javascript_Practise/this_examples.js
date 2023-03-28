let bioData = {
    myName:{
        realName: "vinod thapa",
        channelName: 'thapa technical'
    },
    myAge : 24,
    getData(){
        console.log(`my name is ${this.myName.channelName} and my age is ${this.myAge}`);
    }
}
bioData.getData();