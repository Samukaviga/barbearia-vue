import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Importa ícones que você quer usar
import { faUser, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

// importa o ícone desejado
import { faScrewdriverWrench, faWrench, faGear } from '@fortawesome/free-solid-svg-icons'


// Adiciona os ícones à biblioteca
library.add(faUser, faCoffee, faHeart, faFacebook, faScrewdriverWrench, faWrench, faGear)

export default FontAwesomeIcon
