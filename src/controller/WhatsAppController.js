class WhatsAppController {

    constructor(){

        console.log('WhatsAppController 0K');

        this.loadElements();

    }

    loadElements(){

        this.el = {};

        document.querySelectorAll('[id]').forEach(element=>{

            this.el[Format.getCamelCase(element.id)] = element;

        });

    }

}