class Validator {
    constructor(config) {
      this.elementsConfiguration = config;
      this.errors = {};
      this.generateErrors();
      this.inputListener();
    }
  
    generateErrors() {
      for (let field in this.elementsConfiguration) {
        
        this.errors[field] = [];
      }
    }
  
    inputListener() {
      let selectinput = this.elementsConfiguration;
      for (let field in selectinput) {
        let element = document.querySelector(`input[name="${field}"]`);
        element.addEventListener('input', this.validate.bind(this));
      }
    }
  
    validate(e) {
      let fields = this.elementsConfiguration;
      let field = e.target;
      let fieldName = field.getAttribute('name');
      let fieldValue = field.value;

  
      
      
      this.errors[fieldName] = [];
     
      
      if (fields[fieldName].required && fieldValue === '') {
        this.errors[fieldName].push('Moras popuniti polje');
      }
      
      if (fieldValue.length > fields[fieldName].length ||  fieldValue.length < fields[fieldName].length ){
  
        this.errors[fieldName].push (
          `Polje mora imati ${fields[fieldName].length} karaktera`
        );
      }
  
      if (fields[fieldName].email && !this.validateEmail(fieldValue)) {
        this.errors[fieldName].push('Mail nije validan');
      }
  
   
      if (
        fieldValue.length < fields[fieldName].minlength ||
        fieldValue.length > fields[fieldName].maxlength
      ) {
        this.errors[fieldName].push(
          `Polje mora imati minimalno ${fields[fieldName].minlength} karaktera a maksimalno ${fields[fieldName].maxlength} karaktera`
        );
      }
      
  
     
      if (fields[fieldName].matching) {
        let matching = document.querySelector(`input[name="${fields[fieldName].matching}"]`);
        if (fieldValue !== matching.value) {
          this.errors[fieldName].push('Lozinke se ne poklapaju');
        }
        if (this.errors[fieldName].length === 0) {
          this.errors[fieldName] = [];
          this.errors[fields[fieldName].matching] = [];
        }
      }
  
      this.populateErrors(this.errors);
    }
  
    populateErrors(errors) {
   
      for (const element of document.querySelectorAll('ul')) {
        element.remove();
      }
  
      
      for (let key of Object.keys(errors)) {
        let parentElement = document.querySelector(`input[name="${key}"]`).parentElement;
        let errorElement = document.createElement('ul');
        parentElement.appendChild(errorElement);
  
        errors[key].forEach((error) => {
          let li = document.createElement('li');
          li.innerText = error;
          errorElement.appendChild(li);
        });
      }
    }
  
   
    validateEmail(mail) {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(mail);
    }
  }


