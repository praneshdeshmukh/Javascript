// Linked in url validation 
// const vLinkedInUrl = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-z0-9_-]{5,30}[a-zA-Z0-9]$/;
// const vLinkedInUrl = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
// const url = prompt('Enter your linked in URL')

// if (vLinkedInUrl.test(url)) {
//     console.log("Valid linked in profile URL");
// }
// else {
//     console.log("Invalid linked in profile URL");
// }

const linkedinRegex = /^https:\/\/www\.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

const profileUrl = prompt('Enter your linked in url :');

if (linkedinRegex.test(profileUrl)) {
  console.log('The LinkedIn profile URL is valid.');
} else {
  console.log('The LinkedIn profile URL is not valid.');
}
