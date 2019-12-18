import firebase from '../fb'

export function getBlogs(){
    return(dispatch) => {

        dispatch({
            type:"BLOGS_LOADING_STATUS",
            payload:true
        })

        firebase.database().ref('/Ads').on('value', snapshot => {

            dispatch({
                type:"BLOGS_FETCH",
                payload:snapshot.val()
            })

            dispatch({
                type:"BLOGS_LOADING_STATUS",
                payload:false
            })
      
})

       /* firebase.database().ref('/Ads').on('value', snapshot => {
                    dispatch({
                        type:"BLOGS_FETCH",
                        payload:snapshot.val()
                    })

                    dispatch({
                        type:"BLOGS_LOADING_STATUS",
                        payload:false
                    })
              
        })*/
                               
    }
}



export function postBlogs(title, content, price){
    return (dispatch) => {
        firebase.database().ref('/Ads').push({title, content, price})
    }
}


export function deleteBlog(key){
    return (dispatch) => {
        firebase.database().ref(`/Ads/${key}`).remove()
    }
}

export function editBlog(title, content, price, key){
    return (dispatch) => {
        firebase.database().ref(`/Ads`).child(key).update({title, content, price})
    }
}
