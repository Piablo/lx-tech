export default {
    //Controls/////////////////

    //Buttons
    DELETE_CARD: 'delete-card',
    INSERT_CARD: 'insert-card',

    //Inputs

    START_TICK: 'start-tick',
    END_TICK: 'end-tick',


    //Models
    insertBlackCard(){
        let card = {
            timing: {
                startTick: null,
                endTick: null
            }
            
        }
        return card;
    }
}