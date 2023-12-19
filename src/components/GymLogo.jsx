import gymLogo from '../assets/logo-gym-muttenz.png'

export default function GymLogo( {style}) {
    return <div style={style}>
        <img style={{ height: '100%' }} src={gymLogo} class="logo" alt="Gym Muttenz logo" />
    </div>
}