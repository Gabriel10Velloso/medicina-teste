export class PayloadModel {
  constructor(
    public id?: string,
    public name?: string,
    public type?: string,
    public launch?: string,
    public nationalities?: Array<string>,
    public mass_kg?: string,
    public orbit?: string,
  ) { }
}