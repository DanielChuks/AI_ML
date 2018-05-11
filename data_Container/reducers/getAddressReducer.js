const initialstate={
    region:{},
    Location:"",
    apartment:"",
    deliverynote:"",
    error:null,
    Located:false,
};

const getaddress=(state=initialstate,action)=>{
    switch(action.type){
        case 'FETCH_REGION':{
            return{
                ...state,
                region:action.payload.region
            }
        }
        case 'FETCH_ADDRESS':{
            return{
                ...state,
                Location:action.payload.Location,
                Located:true
            }
        }
        case'APARTMENT':{
            return{
                ...state,
                apartment:action.payload
            }
        }
        case'DELIVERY_NOTE':{
            return{
                ...state,
                deliverynote:action.payload
            }
        }
        default:{return state}
    }
};

export default getaddress;