export class NIP {
    private readonly valid: boolean
    private readonly nip: string

    constructor(nip: string) {
        this.nip = nip.replace(/[ \-]/gi, '')
        this.valid = this.validate()
    }

    get isValid() {
        return this.valid
    }

    getIssuingTaxOfficeCode() {
        return this.nip.substr(0, 3)
    }

    private validate() {
        if (!/^[0-9]{10}$/.test(this.nip)) {
            return false
        }

        const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7]
        const digits = `${this.nip}`.split('').map((digit) => +digit)
        const lastDigit = digits.splice(-1)[0]
        const control = weights.reduce(
            (previous, current, index) => previous + current * digits[index],
            0
        )

        return control % 11 === lastDigit
    }
}
