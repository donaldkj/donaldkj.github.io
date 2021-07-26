
function defaultObj(
  id,
  lightBg,
  lightText,
  lightTextDesc,
  topLine,
  headline,
  description,
  buttonLabel,
  imgStart,
  img,
  alt,
  dark,
  primary,
  darkText,
) {
  return (
      {
      id: id,
      lightBg: lightBg,
      lightText: lightText,
      lightTextDesc: lightTextDesc,
      topLine: topLine,
      headline: headline,
      description: description,
      buttonLabel: buttonLabel,
      imgStart: imgStart,
      img: img,
      alt: alt,
      dark: dark,
      primary: primary,
      darkText: darkText,
    }
  );
}

export const homeObjOne = defaultObj(
  "about",
  false,
  true,
  false,
  "Easy Processing",
  "Get the loan you need quickly",
  "Funds are transferred fast-usually the same day. No credit score required to apply. Getting prequalified takes less than 15 minutes.",
  "Get started",
  false,
  require("../../images/svg-1.svg").default,
  "Car",
  true,
  true,
  false
);

export const homeObjTwo = defaultObj(
  "application",
  true,
  false,
  false,
  "Simple Application",
  "Here's what you will need to get started..",
  "Proof of income, proof of address, three references, and a valid ID.",
  "Learn more",
  true,
  require("../../images/svg-4.svg").default,
  "Piggybank",
  false,
  false,
  true
);

export const homeObjThree = defaultObj(
  "contact",
  true,
  false,
  false,
  "We Are Here For You",
  "Do you need additional assistance?",

  "Contact LA Smart Loans if you have questions that we did not answer. Click the button below to enter your contact information and we will respond within 24hrs. ",
  "Contact LASL",
  true,
  require("../../images/svg-3.svg").default,
  "Paper",
  false,
  false,
  true
);



// #abdca7
// #248e38
// #afd91a
// #323232


// site for svg images:   undraw.co    click 'browse'
