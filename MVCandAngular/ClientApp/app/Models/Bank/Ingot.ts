export class Ingot {
    constructor(
        public Date?: string,
        public MetalID?: number,
        public NoCertificateDollars?: number,
        public NoCertificateRubles?: number,
        public CertificateDollars?: number,
        public CertificateRubles?: number,
        public BanksDollars?: number,
        public BanksRubles?: number,
        public EntitiesDollars?: number,
        public EntitiesRubles?: number,
        public Name?: string,
        public Nominal?: number
    ) { }

    public getOneGramRate() {

        return (this.EntitiesRubles);
    }
}