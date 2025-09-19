//Bringing Proceedings for Breach of Convention Rights Program
//Catrin Jones
//Last changed 23/05/25

/* This program determines potential of claim in
 ECtHR for breach of human right as defined under the Human Rights Act 1998 */ 



function main() {
    var question1, question2, question3, question4, question5, question6, question7;

    question1 = String(prompt('Is body in breach a public authority? (s 6 HRA)?')).trim().toLowerCase();
    if (question1 === 'yes') {
        question2 = String(prompt('Is the claimant a victim of the breach (s 7 HRA)?')).trim().toLowerCase();
        if (question2 === 'yes') {
            question3 = String(prompt('Bring claim before UK court. Does the UK court find a breach of the Convention right?')).trim().toLowerCase();
            if (question3 === 'yes') {
                question4 = String(prompt('Claim brought against UK to ECtHR within 4 months of final decision of UK court?')).trim().toLowerCase();
                if (question4 === 'yes') {
                    question5 = String(prompt('Claim found admissable by Committee/ Chamber of ECtHR?')).trim().toLowerCase();
                    if (question5 === 'yes') {
                        question6 = String(prompt('Committee/ Chamber makes decision. Decision of any Committee is final. Decision of Chamber of ECtHR referred to Grand Chamber within 3 months?')).trim().toLowerCase();
                        if (question6 === 'yes') {
                            question7 = String(prompt('Request for referral accepted by Grand Chamber?')).trim().toLowerCase();
                            if (question7 === 'yes') {
                                alert('Grand Chamber reconsiders case.');
                            } else {
                                alert('Decision of Chamber stands.');
                            }
                        } else {
                            alert('Decision of Chamber stands.');
                        }
                    } else {
                        alert('No remedy');
                    }
                } else {
                    alert('Out of time');
                }
            } else {
                alert('Damages available if necessary to afford just satisfaction');
            }
        } else {
            alert('No claim available: The claimant is not a victim.');
        }
    } else {
        alert('No claim available: The body is not a public authority.');
    }
}