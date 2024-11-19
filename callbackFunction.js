const question = () => {
    console.log('how are you doing?')
    secondCallback()
}

const greetUser = (name, firstCallback, secondCallback) => {
    console.log('welcome to our app')
}

const welcomeMessage = () => {
    console.log('please how can we help you?')
}

greetUser('Oluwatobi', welcomeMessage, )


const user = (name, schoolAndCourse, company) => {
    console.log('My name is ${name}')
    schoolAndCourse()
    company()
}
const schoolAndCourse = () => {
    console.log('I am studying Fullstack Web Development at New Horizons')
}

const company = () => {
    console.log('I will like to work for Microsoft')
}

user('Oluwatobi', schoolAndCourse, company);
