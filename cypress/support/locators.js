const locators = {

    radiobutton:{
        opcao1:'[for="radio1"] > .radioButton',
        opcao2:'[for="radio2"] > .radioButton',
        opcao3:'[for="radio3"] > .radioButton',
        radioelement: '[name=radioButton]'
    },
    checkbox:{
        opcao1: '#checkBoxOption1',
        opcao2: '#checkBoxOption2',
        opcao3: '#checkBoxOption3'
    },
    dropdown:{
        dropdwonelementoptions: 'fieldset #dropdown-class-example > option'
    },
    autocomplete:{
        autocompleteelement: '#autocomplete'
    }
}

export default locators;