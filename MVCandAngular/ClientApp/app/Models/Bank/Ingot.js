var Ingot = /** @class */ (function () {
    function Ingot(Date, MetalId, NoCertificateDollars, NoCertificateRubles, CertificateDollars, CertificateRubles, BanksDollars, BanksRubles, EntitiesDollars, EntitiesRubles, Name, Nominal) {
        this.Date = Date;
        this.MetalId = MetalId;
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
//# sourceMappingURL=Ingot.js.map