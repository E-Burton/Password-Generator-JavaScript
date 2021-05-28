# JavaScript Password Generator

## Objective

Modify HTML and CSS code to create a responsive JavaScript powered application that generates a random password based on criteria selected. 

## User Story (Concept)

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Brief/Acceptance Criteria 

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Concept Mock-Up

The following image shows the web application's appearance and functionality:

![Password Generator Demo](./Assets/password-generator-demo.png)

## Challenges

* Ensuring user inputs valid length for password.<br>
    **Solution:** `while` loop.

* Creating array to select random values based on user criteria.<br>
    **Solution:** Concatenated criteria arrays into new array within `if` statements.

* Returning array as string without commas.<br>
    **Solution:** `join()` function with seperator as empty string `""`.

## Link to Webiste

[Password Generator](https://e-burton.github.io/Password-Generator-JavaScript/)

## Additional Resources Used for Finished Project

* [How to Select a Random Element from an Array](https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/)

* [How to Concatenate Arrays](https://www.w3schools.com/jsref/jsref_concat_array.asp)

* [How to Join Arrays](https://www.w3schools.com/jsref/jsref_join.asp)

