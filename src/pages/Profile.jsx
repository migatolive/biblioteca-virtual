import { useSelector } from 'react-redux'

const Profile = () => {
    const { userInfo } = useSelector((state) => state.user)

    return (
        <div>
            <span>
                Bienvenido <strong>{userInfo?.email}</strong> Tu puedes ver esta pagina
                porque iniciaste sesión correctamente.
            </span>
        </div>
    )
}

export default Profile;