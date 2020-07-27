import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div id='app'>
        <h1>Holy</h1>
      </div>
    );
  }
});