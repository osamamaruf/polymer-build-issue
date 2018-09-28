{
    class MyApp extends (Polymer.Element) {
        static get is() {
            return 'my-app';
        }

        static get properties() {
            return {
            };
        }


    }

    window.customElements.define(MyApp.is, MyApp);
}
