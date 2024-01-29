const form = document.querySelector["form"];
const firstName = document.querySelector["#firstName"];
const middleName = document.querySelector["#middleName"]
const lastName = document.querySelector["#lastName"]
const emailAddress = document.querySelector["#emailAddress"]
const dOB = document.querySelector["#dOB"]
const male = document.querySelector["#male"]
const female = document.querySelector["#female"]
const others = document.querySelector["#others"]
const country = document.querySelector["#country"]
const password = document.querySelector["#password"]
const reasonToStudy = document.querySelector["#reasonToStudy"]
const reasonToBeConsidered = document.querySelector["#reasonToBeConsidered"]
const resume = document.querySelector["#resume"]
const selectCourse = document.querySelector["#selectCourse"]
const aboutSelf = document.querySelector["#aboutSelf"]
const button = document.querySelector["#registerNow"]
const h3 = document.querySelector["h3"];
const code = document.createElement("code");


code.style.width = "200px";
code.style.wordwrap = "break-word";
code.style.alignSelf = "center";
code.style.textAlign = "center";


const registeration = (event) => {
    event.preventDefault();
    button.innerText = "loading..."

    /*const firstName = firstNameInput.valu*/

    const RegisterAsAnObject = {
        firstName: firstNameInput.value,
        middleName: middleNameInput.value,
        lastName: lastNameInput.value,
        emailAddress: emailAddressInput.value,
        dOB: dOBInput.value,
        male: maleInput.value,
        female: femaleInput.value,
        others: othersInput.value,
        country: countryInput.value,
        password: passwordInput.value,
        reasonToStudy: reasonToStudyInput.value,
        reasonToBeConsidered: reasonToBeConsideredInput.value,
        resume: resumeInput.value,
        selectCourse: selectCourseInput.value,
        aboutSelf: aboutSelfInput.value,
    };

    const RegisterAsAJsonString = JSON.stringify(RegisterAsAnObject);

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: "POST",
        body: RegisterAsAJsonString,
        headers: {
            "content-type": "application/json; charset=UTF-8",
        },
    })
    .then((response) => {
        const statuscode = response.status;

        if (statuscode === 201) {
            h4.remove();
        }
        return response.json();
    })
.then((responseASJsObject) => {
    ul.innerHTML = <li>id : ${responseASJsObject.id}</li>
    <li>first Name : ${responseASJsObject.firstName}</li>
    <li>Last Name : ${responseASJsObject.middleName}</li>
    <li>first Name : ${responseASJsObject.lastName}</li>
    <li>Last Name : ${responseASJsObject.emailAddress}</li>
    <li>first Name : ${responseASJsObject.dOB}</li>
    <li>Last Name : ${responseASJsObject.male}</li>
    <li>first Name : ${responseASJsObject.female}</li>
    <li>Last Name : ${responseASJsObject.others}</li>
    <li>first Name : ${responseASJsObject.country}</li>
    <li>Last Name : ${responseASJsObject.password}</li>
    <li>first Name : ${responseASJsObject.reasonToStudy}</li>
    <li>Last Name : ${responseASJsObject.reasonToBeConsidered}</li>
    <li>first Name : ${responseASJsObject.resume}</li>
    <li>Last Name : ${responseASJsObject.selectCourse}</li>
    <li>first Name : ${responseASJsObject.aboutSelf}</li>
    ;
    registerNow.appendChild(ul);
})
.catch(onrejected: (error) => console.log(...data: error))
.finally(onfinally: () => (button.innerText = "Join now"));
};

form.addEventListener("submit", registeration);
