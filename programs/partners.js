// Is the firm bound
// Catrin Jones
// Last changed 04/06/25

/* This program determines whether the firm is bound by acts of a partner */

function main() {
    // Variables for user responses
    let question1, question2, question3, question4, question5, question6;

    // What is the partner's name?:
    question1 = String(
        prompt("What is the partner's name?"))
        .trim();

    // Check whether the partner had actual authority:
    question2 = String(
        prompt(`Did partner ${question1} have actual authority?`))
        .trim().toLowerCase();

    if (question2 === 'yes') {
        alert('The firm and all the partners are bound. (s 5 (first part) and/or s 6)');
    } else if (question2 === 'no') {
        // Check whether the transaction related to the usual business of the firm.
        question3 = String(
            prompt('Did the transaction relate to the usual business of the firm?'))
            .trim().toLowerCase();

        if (question3 === 'no') {
            alert('The firm is not bound.');
        } else if (question3 === 'yes') {
            // Check whether partner X would usually be expected to have authority.
            question4 = String(
                prompt(`Would partner ${question1} usually be expected to have authority?`))
                .trim().toLowerCase();

            if (question4 === 'no') {
                alert('The firm is not bound.');
            } else if (question4 === 'yes') {
                // Check whether the other party knew or believed partner X to have been a partner.
                question5 = String(
                    prompt(`Did the other party know or believe partner ${question1} to be a partner?`))
                    .trim().toLowerCase();

                if (question5 === 'no') {
                    alert('The firm is not bound.');
                } else if (question5 === 'yes') {
                    // Check whether the other party knew partner X had no authority.
                    question6 = String(
                        prompt(`Did the other party know partner ${question1} had no authority?`))
                        .trim().toLowerCase();

                    if (question6 === 'yes') {
                        alert('The firm is not bound.');
                    } else if (question6 === 'no') {
                        alert('The firm and all the partners are bound. (s 5 (second part))');
                    }
                }
            }
        }
    }
}

// To run in a browser, call main()
// main();
   