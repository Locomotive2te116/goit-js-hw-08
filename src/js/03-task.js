
import throttle from 'lodash.throttle';
 
const feedbackFormEl = document.querySelector('.feedback-form');
console.log(feedbackFormEl)
const userData = {};

fromStorageToInput = () => { 
    const dataFormLocStor = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (dataFormLocStor === null) { 
      return;
    }

    for (const key in dataFormLocStor) { 
        if (dataFormLocStor.hasOwnProperty(key)) {
           feedbackFormEl.elements[key].value = dataFormLocStor[key];
       }
    }
    
}
fromStorageToInput();

const onFeedbackFormElChange = ({ target: feedbackFormField}) => { 
    const message = feedbackFormField.value;
    const email = feedbackFormField.name;

    userData[email] = message;
   


    localStorage.setItem('feedback-form-state', JSON.stringify(userData));

}


const onFeedbackFormSubmit = event => {
  event.preventDefault();

  feedbackFormEl.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(userData);
};


feedbackFormEl.addEventListener('input',throttle(onFeedbackFormElChange,500))

feedbackFormEl.addEventListener('change', onFeedbackFormElChange);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit); 