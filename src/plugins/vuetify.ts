import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: colors.yellow.darken3,
        secondary: colors.yellow.base,
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
});
