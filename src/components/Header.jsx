import nome from '../assets/header mobile.png'
import qualifiche from '../assets/qualifiche.png'

function Header() {
  return (
    <div className="w-full h-screen sm:pb-30 md:pb-50 xl:pb-70 2xl:pb-90 overflow-hidden relative">
      <div className="w-full absolute bottom-0 left-0 -translate-y-50">
        <img
          src={nome}
          alt="Nome"
          className="w-full opacity-80 md:opacity-50 xl:opacity-30 transition-all duration-300"
        />
        <div className="flex w-max animate-infinite-scroll">
          <img
            src={qualifiche}
            alt="Appellativi"
            className="h-8 md:h-10 lg:h-12 2xl:h-14 w-auto max-w-none"
          />
          <img
            src={qualifiche}
            alt="Appellativi"
            className="h-8 md:h-10 lg:h-12 2xl:h-14 w-auto max-w-none"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
