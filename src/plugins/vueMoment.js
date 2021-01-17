import Vue from 'vue'
import VueMoment from 'vue-moment'
import 'moment/locale/pt-br'
import moment from 'moment'

moment.locale('pt-br')

Vue.use(VueMoment, {
  moment,
})

export default VueMoment
