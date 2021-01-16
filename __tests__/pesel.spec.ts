import { PESEL } from '../src'

const validMales = ['02040968991', '03291243431', '46510300036', '99663011115']
const invalidMales = ['03291243432', '03213192538']
const validFemales = ['79050821127', '54090462123']
const invalidFemales = ['79050821128', '54090462124']

describe('pesel', () => {
    describe('isValid should be true if PESEL is valid', () => {
        ;[...validMales, ...validFemales].forEach((peselNumber) => {
            it(`using ${peselNumber}`, () => {
                const pesel = new PESEL(peselNumber)

                expect(pesel.isValid).toEqual(true)
            })
        })
    })

    describe('isValid should be false if PESEL is invalid', () => {
        ;[...invalidMales, ...invalidFemales].forEach((peselNumber) => {
            it(`using ${peselNumber}`, () => {
                const pesel = new PESEL(peselNumber)

                expect(pesel.isValid).toEqual(false)
            })
        })
    })

    describe('getGender should return "male" if PESEL belongs to a male', () => {
        validMales.forEach((peselNumber) => {
            it(`using valid ${peselNumber}`, () => {
                const pesel = new PESEL(peselNumber)

                expect(pesel.getGender()).toEqual('male')
            })
        })

        invalidMales.forEach((peselNumber) => {
            it(`using invalid ${peselNumber}`, () => {
                const pesel = new PESEL(peselNumber)

                expect(pesel.getGender()).toEqual('male')
            })
        })
    })

    describe('getGender should return "female" if PESEL belongs to a female', () => {
        validFemales.forEach((peselNumber) => {
            it(`using valid ${peselNumber}`, () => {
                const pesel = new PESEL(peselNumber)

                expect(pesel.getGender()).toEqual('female')
            })
        })
        invalidFemales.forEach((peselNumber) => {
            it(`using valid ${peselNumber}`, () => {
                const pesel = new PESEL(peselNumber)

                expect(pesel.getGender()).toEqual('female')
            })
        })
    })

    describe('getDateOfBirth should return date of birth Date object', () => {
        it(`using valid ${validMales[0]}`, () => {
            expect(new PESEL(validMales[0]).getDateOfBirth()).toEqual(new Date(1902, 3, 9))
            expect(new PESEL(validMales[1]).getDateOfBirth()).toEqual(new Date(2003, 8, 12))
            expect(new PESEL(validMales[2]).getDateOfBirth()).toEqual(new Date(2146, 10, 3))
            expect(new PESEL(validMales[3]).getDateOfBirth()).toEqual(new Date(2299, 5, 30))
        })
    })

    describe('getDateOfBirth should return null if date part is not parsable', () => {
        const invalidParts = ['abc', '9x9x9x', '12345c']

        invalidParts.forEach((invalidPart) => {
            it(`using invalid ${invalidPart}`, () => {
                expect(new PESEL(invalidPart).getDateOfBirth()).toEqual(null)
            })
        })
    })
})
