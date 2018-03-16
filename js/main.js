const vm = new Vue({
  el : "#app",

  data : {
    welcomemessage : "Welcome to your first Vue app!",

    yummyFruit : [
      {name : "apple", flavour : "tasty"},
      {name : "oranges", flavour : "sweet"},
      {name : "pineapple", flavour : "tangy"}
    ],

    hasVue : true,
    vuemessage : "hey, you have vue!"
  },

  methods : {
    logClicked(e) {
      console.log(e.currentTarget, this);
    }
  }
});
