module.exports = {
    sanitizeSlidesForDB(slides){
        const listLength = slides.length;
        let returnArray = [];
    
        for(let i = 0; i < listLength; i++){
            let slide = {
                timing: JSON.stringify(slides[i].timing),
                parentId: slides[i].parentId
            }
            returnArray.push(slide);
        }
        return returnArray
    
    },

    sanitizeSlidesForClient(slides){
        const listLength = slides.length;
        let returnArray = [];
    
        for(let i = 0; i < listLength; i++){
            let slide = {
                id: slides[i].id,
                timing: JSON.parse(slides[i].timing),
                parentId: slides[i].parentId
            }
            returnArray.push(slide);
            console.log(slide)
        }
        return returnArray
    }
}