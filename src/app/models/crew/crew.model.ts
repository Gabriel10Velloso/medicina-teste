
export class CrewModel {
  constructor(
    public id?: string,
    public name?: string,
    public agency?: string,
    public image?: string,
    public wikipedia?: string,
    public launches?: Array<string>,
    public status?: string,
  ) { }
}