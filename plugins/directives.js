import Vue from "vue";
import {Constants, Util} from '@/utils'

function decimalFun(el, binding) {
  if (typeof binding.value != 'undefined' && binding.value != null) {
    const formattedValue = Util.formatNumber(binding.value);
    if (binding.arg) {
      const currency = Constants.Currencies[binding.arg.toUpperCase()]
      el.innerHTML = `${currency} ${formattedValue}`;
    } else
      el.innerHTML = formattedValue
  } else {
    el.innerHTML = null
  }
}

Vue.directive('decimal', {inserted: decimalFun, update: decimalFun});
