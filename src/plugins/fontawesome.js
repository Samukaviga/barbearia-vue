import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Importa ícones que você quer usar
import { faUser, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faChartBar } from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'

// importa o ícone desejado
import { faScrewdriverWrench, faWrench, faGear, faUserCircle, faUserPlus, faCalendarPlus } from '@fortawesome/free-solid-svg-icons'


// Adiciona os ícones à biblioteca
library.add(faUser, faCoffee, faHeart, faFacebook, faScrewdriverWrench, faWrench, faGear, faList, faChartBar, faChartLine, faUserCircle, faFileCirclePlus, faUserPlus, faCalendarPlus )

export default FontAwesomeIcon


