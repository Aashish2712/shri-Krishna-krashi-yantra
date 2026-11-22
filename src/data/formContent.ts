// Shared wording for the prototype forms. Kept separate from components so it can be
// reviewed with the client and translated later.
export const formContent = {
  requiredNote: 'All fields are required unless marked optional.',
  prototype: {
    quote: {
      title: 'Prototype form',
      text: 'Checking this form does not send or save your enquiry. Quotation requests will work once the website backend is connected. Until then, please contact us directly.',
    },
    dealer: {
      title: 'Prototype form',
      text: 'Submitting this prototype form does not create an actual dealership application. Nothing is sent or saved. Please contact us directly to start a conversation.',
    },
    contact: {
      title: 'Prototype form',
      text: 'Checking this form does not send or save your message. Messages will work once the website backend is connected. Until then, please contact us directly.',
    },
  },
  success: {
    title: 'Your entries look complete, but nothing has been sent',
    text: 'This is a prototype: your details were not sent to the company or saved anywhere. To make your enquiry now, use one of these:',
  },
  error: {
    title: (count: number) =>
      count === 1 ? 'Please fix 1 problem before continuing' : `Please fix ${count} problems before continuing`,
  },
}
