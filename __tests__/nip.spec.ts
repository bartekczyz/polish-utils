import { NIP } from '../src/nip'

const valid = ['7622654927', '762 265 4927', '762-265-4927', '888-888-88-88', '12-34-567-328']
const invalid = ['7622654926', '762 265 4926', '762-265-4926', '888-888-88-87', '11-11-111-110']

describe('nip', () => {
    describe('isValid should be true if NIP is valid', () => {
        valid.forEach((nipNumber) => {
            it(`using ${nipNumber}`, () => {
                const nip = new NIP(nipNumber)

                expect(nip.isValid).toEqual(true)
            })
        })
    })

    describe('isValid should be true if NIP is valid', () => {
        invalid.forEach((nipNumber) => {
            it(`using ${nipNumber}`, () => {
                const nip = new NIP(nipNumber)

                expect(nip.isValid).toEqual(false)
            })
        })
    })

    describe('getIssuingTaxOfficeCode return issuing tax office code', () => {
        valid.forEach((nipNumber) => {
            it(`using ${nipNumber}`, () => {
                const nip = new NIP(nipNumber)
                const code = nip.getIssuingTaxOfficeCode()

                expect(code.length).toEqual(3)
                expect(+code).not.toBeNaN()
            })
        })
    })
})
