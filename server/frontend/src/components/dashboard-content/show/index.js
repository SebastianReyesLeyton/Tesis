
const ShowComponent = (props) => {

    let content;
    switch (props.type) {
        case "supervisor":
            if (props.user.rol === 'admin') content = <p>HOLI</p>
            break;
        default:
            break;
    }

    return (
        content
    )
}

export default ShowComponent;