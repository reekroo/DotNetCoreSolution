var Ingot = /** @class */ (function () {
    function Ingot(Date, MetalID, NoCertificateDollars, NoCertificateRubles, CertificateDollars, CertificateRubles, BanksDollars, BanksRubles, EntitiesDollars, EntitiesRubles, Name, Nominal) {
        this.Date = Date;
        this.MetalID = MetalID;
        this.NoCertificateDollars = NoCertificateDollars;
        this.NoCertificateRubles = NoCertificateRubles;
        this.CertificateDollars = CertificateDollars;
        this.CertificateRubles = CertificateRubles;
        this.BanksDollars = BanksDollars;
        this.BanksRubles = BanksRubles;
        this.EntitiesDollars = EntitiesDollars;
        this.EntitiesRubles = EntitiesRubles;
        this.Name = Name;
        this.Nominal = Nominal;
    }
    Ingot.prototype.getOneGramRate = function () {
        return (this.EntitiesRubles);
    };
    return Ingot;
}());
export { Ingot };
//# sourceMappingURL=ingot.js.map