import Ember from 'ember';


export default Ember.Route.extend({
    model(params, transition) {
        const keywords = [
            'syria',
            'whatever'
        ];

        return keywords;
    }
});
