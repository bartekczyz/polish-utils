type Gender = 'male' | 'female'

export class PESEL {
    private readonly valid: boolean

    constructor(private readonly pesel: string) {
        this.valid = this.validate()
    }

    get isValid() {
        return this.valid
    }

    getGender(): Gender | null {
        if (this.pesel.length < 10) {
            return null
        }

        const genderDigit = +this.pesel[9]

        if (genderDigit % 2 === 0) {
            return 'female'
        }

        return 'male'
    }

    getDateOfBirth(): Date | null {
        if (this.pesel.length < 6) {
            return null
        }

        // eslint-disable-next-line prefer-const
        let [year, month, day] = this.pesel.match(/.{1,2}/g).map((part) => +part || 0)
        let baseYear = 1900

        if (month > 20 && month < 40) {
            baseYear = 2000
            month -= 20
        } else if (month > 40 && month < 60) {
            baseYear = 2100
            month -= 40
        } else if (month > 60 && month < 80) {
            baseYear = 2200
            month -= 60
        } else if (month > 80 && month < 99) {
            baseYear = 1800
            month -= 80
        }

        if (!year || !month || !day) {
            return null
        }

        return new Date(baseYear + year, --month, day)
    }

    private validate() {
        if (!/^[0-9]{11}$/.test(this.pesel)) {
            return false
        }

        const weights = [1, 3, 7, 9]
        const digits = `${this.pesel}`.split('').map((digit) => +digit)
        const lastDigit = digits.splice(-1)[0]
        const control = digits.reduce((previous, current, index) => previous + current * weights[index % 4]) % 10

        return 10 - (control === 0 ? 10 : control) === lastDigit
    }
}
