const studSignupAction = (props)=>{
    return {
        type:props.type,
        username: props.username,
        role:props.role
    }
}

export default studSignupAction;