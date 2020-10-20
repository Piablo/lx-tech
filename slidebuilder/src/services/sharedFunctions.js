export default {

    decoupleObjectList(list){
        let returnList = [];
        const listLength = list.length;
        for(let i = 0; i < listLength; i++){
            returnList.push(list[i]);
        }
        return returnList;
    }
}