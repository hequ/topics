import Ember from 'ember';


export default Ember.Route.extend({
    model(params, transition) {
        return Ember.$.getJSON('/api/news').then((response) => {
            return response;
        });
    }
});
