function showGrace(grace,graceLevel,levelText) {
    for(let i=0;i<graceLevel.length;i++){
        if(grace>=graceLevel[i]){
            return levelText[i];
        }
    }
    //如果不存在，那么就是分数很低，返回最后一个
    return levelText[levelText.length-1];
}
let graceLevel=[700,650,600,550];
let levelText=['信用极好','信用优秀','信用良好','信用中等','信用较差'];

console.log(showGrace(900,graceLevel,levelText))