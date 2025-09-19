// Identifying Third Party Rights
// Catrin Jones
// Last changed 23/05/25

/* This program determines whether an estate or interest is legal, equitable or statutory */

function main() {
    // Variables for user responses
    let question1, question2, question3, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15, question16, question17, question18, question19, question20, question21;

    // Check statutory right:
    question12 = String(
        prompt('Does the Family Law Act 1996 apply? (yes/no)')
    ).trim().toLowerCase();

    if (question12 === 'yes') {
        question17 = String(
            prompt(
                "No formality required. A statutory right has been established.\n\n" +
                "Has the right been registered as a notice at the Land Registry by date of registration by buyer? (yes/no)"
            )
        ).trim().toLowerCase();
        if (question17 === 'yes') {
            alert('Binds buyer.');
        } else if (question17 === 'no') {
            alert('Does not bind buyer.');
        }
        return;
    } else if (question12 === 'no') {
        // First: Identify type of estate or interest
        question1 = String(
            prompt(`Identify the type of estate or interest \n`
                + `(easement/mortgage/restrictive covenant/freehold/leasehold/lease/contract/implied trust/express trust)`)
        ).trim().toLowerCase();

        // Express or implied trusts
        if (question1 === 'implied trust' || question1 === 'express trust' || question1 === 'trust') {
            question20 = String(
                prompt(`There is an express or implied trust (resulting or constructive), the beneficiary therefore has an interest under trust of land.\n\n`
                    + `Has this interest been recorded as a restriction at the Land Registry? (yes/no)`))
                .trim().toLowerCase();
            if (question20 === 'yes') {
                alert('This will alert the buyer to the need to overreach. The buyer will be prevented from registering the purchase.');
            } else {
                question21 = String(
                    prompt(`Whether or not there is a restriction recorded, the trust interest might be overriding under Sch 3, para 2 and need overreaching if the buyer is to purchase free of the trust interest.\n`
                        + `Is the person with the trust interest in occupation? (yes/no)`))
                    .trim().toLowerCase();
                // You could add further logic here on occupation if needed
            }
            return;
        }

        // Freehold/leasehold/lease logic
        if (question1 === 'freehold' || question1 === 'leasehold' || question1 === 'lease') {
            question2 = String(
                prompt(
                    `The estate is capable of being legal since ${question1} is listed in s 1(1) of the LPA 1925.\n` +
                    `However, in order to determine whether the estate is valid, it's necessary to consider formalities.\n` +
                    `Has the estate been created by: deed, contract, signed writing, or no formality?`
                )
            ).trim().toLowerCase();

            if (question2 === 'deed') {
                question3 = String(
                    prompt(
                        'To be legal, most estates and interests must be created by deed (LPA 1925 s52). ' +
                        'Has the deed met the requirements of s1 LP(MP)A 1989 (signed, witnessed, delivered)? (yes/no)'
                    )
                ).trim().toLowerCase();

                if (question3 === 'yes' && (question1 === 'leasehold' || question1 === 'lease')) {
                    question14 = String(
                        prompt(`Then the "${question1}" is a legal estate. \nIs the legal lease for over 7 years? (yes/no)`)
                    ).trim().toLowerCase();

                    if (question14 === 'yes') {
                        question15 = String(
                            prompt(`Legal leases for over 7 years are listed under s 27 of the LRA 2002 as being a registrable disposition.\n\nHas the interest been registered at the Land Registry by date of registration of buyer? (yes/no)`)
                        ).trim().toLowerCase();

                        if (question15 === 'yes') {
                            alert('The legal lease will be binding on the buyer.');
                        } else if (question15 === 'no') {
                            alert('The lease will not be binding on the buyer.\nNOTE: Possible overlap with Sch 3 para 2 if lease not registered. Is the interest of the person in actual occupation?');
                        }
                    } else if (question14 === 'no') {
                        question16 = String(
                            prompt(
                                `The legal lease is less than 7 years and does not need to be registered to bind the buyer.\n\n` +
                                `A legal lease under 7 years is listed under Sch 3, para 1 of the LRA 2002 as a possible overriding interest. \n` +
                                `Did the lease exist by date of completion of the sale? (yes/no)`
                            )
                        ).trim().toLowerCase();
                        if (question16 === 'yes') {
                            alert('The legal lease will bind the buyer as an overriding interest.');
                        } else if (question16 === 'no') {
                            alert('The lease will not bind the buyer.');
                        }
                    }
                } else if (question3 === 'no' && (question1 === 'leasehold' || question1 === 'lease')) {
                    question5 = String(
                        prompt(
                            'Does the parol lease exception apply? (Have the conditions in s54(2) of the LPA 1925 been met?) (yes/no)'
                        )
                    ).trim().toLowerCase();

                    if (question5 === 'yes') {
                        alert('A valid lease has been created without a deed.');
                    } else {
                        alert('The lease is not legal.');
                    }
                } else if (question3 === 'yes') {
                    alert(`A valid legal ${question1} has been created.`);
                } else {
                    alert('No remedy');
                }
            } else if ((question1 === 'leasehold' || question1 === 'lease') && question2 !== 'deed') {
                question5 = String(
                    prompt(
                        'Does the parol lease exception apply? (Have the conditions in s54(2) of the LPA 1925 been met?) (yes/no)'
                    )
                ).trim().toLowerCase();

                if (question5 === 'yes') {
                    question14 = String(
                        prompt(`Then the "${question1}" is a legal estate. \nIs the legal lease for over 7 years? (yes/no)`)
                    ).trim().toLowerCase();
                    if (question14 === 'yes') {
                        question15 = String(
                            prompt(`Legal leases for over 7 years are listed under s 27 of the LRA 2002 as being a registrable disposition.\n\nHas the interest been registered at the Land Registry by date of registration of buyer? (yes/no)`)
                        ).trim().toLowerCase();

                        if (question15 === 'yes') {
                            alert('The legal lease will be binding on the buyer.');
                        } else if (question15 === 'no') {
                            alert('The lease will not be binding on the buyer.\nNOTE: Possible overlap with Sch 3 para 2 if lease not registered. Is the interest of the person in actual occupation?');
                        }

                    } else if (question14 === 'no') {
                        question16 = String(
                            prompt(
                                `The legal lease is less than 7 years and does not need to be registered to bind the buyer.\n\n` +
                                `A legal lease under 7 years is listed under Sch 3, para 1 of the LRA 2002 as a possible overriding interest. \n` +
                                `Did the lease exist by date of completion of the sale? (yes/no)`
                            )
                        ).trim().toLowerCase();
                        if (question16 === 'yes') {
                            alert('The legal lease will bind the buyer as an overriding interest.');
                        } else if (question16 === 'no') {
                            alert('The lease will not bind the buyer.');
                        }
                    }
                } else if (question2 === 'contract') {
                    question10 = String(prompt(
                        `Have the requirements set out in s 2 LP(MP)A 1989 been met?\n` +
                        `1. Have the agreed terms been included?\n` +
                        `2. Has the contract been signed in writing? (yes/no)`
                    )).trim().toLowerCase();

                    if (question10 === 'yes') {
                        question19 = String(
                            prompt(
                                `The lease cannot be legal but will be equitable (s 1(3) LPA 1925) since it fulfils the formalities under s 2 LP(MP)A 1989 and so will be treated as an estate contract.\n\n` +
                                `Estate contracts/ equitable leases are interests which affect a registered estate.\n\n` +
                                `Has the interest been registered as a notice by date of registration of buyer? (yes/no)`
                            )
                        ).trim().toLowerCase();
                        if (question19 === 'yes') {
                            alert('The interest will bind buyer.');
                        } else if (question19 === 'no') {
                            alert(`The interest will not bind buyer. \n`
                                + `Is the person who holds the interest in occupation?`);
                        }
                    } else {
                        alert('The lease is not legally valid nor recognised in equity.');
                    }
                } else {
                    question10 = String(prompt(
                        `Have the requirements set out in s 2 LP(MP)A 1989 been met?\n` +
                        `1. Have the agreed terms been included?\n` +
                        `2. Has the contract been signed in writing? (yes/no)`
                    )).trim().toLowerCase();

                    if (question10 === 'yes') {
                        question19 = String(
                            prompt(
                                `The lease cannot be legal but will be equitable (s 1(3) LPA 1925) since it fulfils the formalities under s 2 LP(MP)A 1989 and so will be treated as an estate contract.\n\n` +
                                `Estate contracts/ equitable leases are interests which affect a registered estate.\n\n` +
                                `Has the interest been registered as a notice by date of registration of buyer? (yes/no)`
                            )
                        ).trim().toLowerCase();
                        if (question19 === 'yes') {
                            alert('The interest will bind buyer.');
                        } else if (question19 === 'no') {
                            alert(`The interest will not bind buyer. \n`
                                + `Is the person who holds the interest in occupation?`);
                        }
                    } else {
                        alert('The lease is not legally valid nor recognised in equity.');
                    }
                }
            } else {
                alert('The lease is not legally valid.');
            }
        } else if (question1 === 'easement') {
            question6 = String(prompt(
                `${question1} is listed as one of five third-party interests that are capable of being legal under s 1(2) of the LPA 1925 provided that the easement is for a duration equivalent to one of the two legal estates, i.e. an estate in fee simple absolute in possession (freehold) or for a term of years absolute (leasehold).\n` +
                `Will the easement either last forever or does it have a fixed duration? (yes/no)`
            )).trim().toLowerCase();

            if (question6 === 'yes') {
                question7 = String(prompt('Has there been a deed? (yes/no)')).trim().toLowerCase();
                if (question7 === 'yes') {
                    question12 = String(
                        prompt(
                            `A valid legal easement has been expressly created by deed. This is listed under s 27 of the LRA 2002 as a registrable disposition.\n` +
                            `Has the legal easement been registered at the Land Registry by date of registration of buyer? (yes/no)`
                        )
                    ).trim().toLowerCase();
                    if (question12 === 'yes') {
                        alert('The easement is legal and binds the buyer.');
                    } else if (question12 === 'no') {
                        alert('The easement will not bind the buyer.');
                    }
                } else if (question7 === 'no') {
                    alert('A valid legal easement may still arise without the need for a deed or any other formality');
                }
            } else if (question6 === 'no') {
                question10 = String(prompt(
                    'This is an easement of uncertain duration. Has this interest been created in signed writing as per s 53(1) LPA 1925? (yes/no)'
                )).trim().toLowerCase();

                if (question10 === 'yes') {
                    alert('An equitable interest has been created.');
                } else {
                    alert('No recognised equitable interest exists.');
                }
            } else {
                alert('Response not recognised.');
            }
        } else if (question1 === 'mortgage') {
            question8 = String(prompt(
                `This interest is listed under s1(2) LPA 1925 and so may be capable of being legal.\n` +
                `Generally, for a legal interest there must be a deed (s 52 LPA 1925). Has a deed been signed, witnessed and delivered (s 1 LP(MP)A 1989)? (yes/no)`
            )).trim().toLowerCase();

            if (question8 === 'yes') {
                question13 = String(
                    prompt(
                        `The mortgage is a legally valid interest and is listed as a legal charge under s 27 of the LRA 2002 as a registrable disposition.\n` +
                        `Has the mortgage been registered at the Land Registry by date of registration of buyer? (yes/no)`
                    )
                ).trim().toLowerCase();
                if (question13 === 'yes') {
                    alert('The mortgage becomes legal and is binding on the buyer.');
                } else if (question13 === 'no') {
                    alert('The mortgage will not be binding on the buyer.');
                }
            } else if (question8 === 'no') {
                alert('The interest is not legally recognised.');
            }
        } else if (question1 === 'contract') {
            question9 = String(prompt(
                `Have the requirements set out in s 2 LP(MP)A 1989 been met?\n` +
                `1. Have the agreed terms been included?\n` +
                `2. Has the contract been signed in writing? (yes/no)`
            )).trim().toLowerCase();

            if (question9 === 'yes') {
                alert('A contract for sale of a freehold estate or contract for option to buy will be recognised by equity where there is a contract to create or convey a legal estate in land.');
            } else {
                alert('Interest not recognised in equity.');
            }
        } else if (question1 === 'restrictive covenant') {
            question11 = String(prompt(
                'Has this interest been created in signed writing as per s 53(1) LPA 1925? (yes/no)'
            )).trim().toLowerCase();

            if (question11 === 'yes') {
                question18 = String(
                    prompt(
                        `The restrictive covenant is an equitable interest which affects a registered estate.\n` +
                        `Has the interest been registered at the Land Registry by date of registration of buyer? (yes/no)`
                    )
                ).trim().toLowerCase();
                if (question18 === 'yes') {
                    alert('Interest binds buyer.');
                } else if (question18 === 'no') {
                    alert('Interest will not bind buyer.');
                }
            } else {
                alert('No recognised equitable interest exists.');
            }
        } else {
            alert('The estate or interest type provided is not recognized.');
        }
    } else {
        alert('Response not recognised.');
    }
}

// To run in a browser, call main()
// main();