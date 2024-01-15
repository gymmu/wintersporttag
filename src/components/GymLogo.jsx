import gymLogo from '../assets/logo-gym-muttenz.png'

export default function GymLogo( {style}) {
    return <div style={style}>
        <a href="https://www.gym-muttenz.ch">
        <img style={{ height: '100%' }} src={gymLogo} class="logo" alt="Gym Muttenz logo" />
        </a>
    </div>
}
