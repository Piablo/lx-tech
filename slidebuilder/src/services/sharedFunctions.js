export default {

    decoupleObjectList(list){
        let returnList = [];
        const listLength = list.length;
        for(let i = 0; i < listLength; i++){
            returnList.push(list[i]);
        }
        return returnList;
    },

    buildFilePropertiesModel(slide, propertyName, value){
        let returnSlide = slide;
        let fileProperties = slide.fileProperties;
        if(fileProperties === undefined){
            let model = {
                yPosition: null,
                yValue: null,
                xPosition: null,
                xValue: null,
                width: null,
                height: null,
            }    
            fileProperties = model;
        }
        if(propertyName === 'yPosition'){
            fileProperties.yPosition = value;
        }
        else if(propertyName === 'yValue'){
            fileProperties.yValue = parseInt(value);
        }
        else if(propertyName === 'xPosition'){
            fileProperties.xPosition = value;
        }
        else if(propertyName === 'xValue'){
            fileProperties.xValue = parseInt(value);
        }
        else if(propertyName === 'width'){
            fileProperties.width = parseInt(value);
        }
        else if(propertyName === 'height'){
            fileProperties.height = parseInt(value);
        }
        returnSlide.fileProperties = fileProperties;
        return returnSlide;
    }
}