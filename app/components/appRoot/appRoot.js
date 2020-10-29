spa.$('appRoot', {
  style:'.',
  data: { name: 'appRoot' }
});

spa.$extend('appRoot', {
  renderCallback: function(){
    var templateData = this.$data; //or app.appRoot.$data
    console.log('Component appRoot has been rendered with Data:', templateData);
  },

  doSomething: function(){
    //call app.appRoot.doSomething();
  },

  events: [
    // { target: '#btnSubmit',
    //   onClick: function(){
    //     app.appRoot.doSomething();
    //   }
    // }
  ]
});