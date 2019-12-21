import Vue from 'vue';
import { extend } from 'vee-validate';
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';

// Add a rule.

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
